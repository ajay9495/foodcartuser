import { useLocation, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import {addressSlice} from '../../Redux/AddressSlice'
import { useSelector,useDispatch } from "react-redux";
import useAddressApi from './useAddressApi'
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";
import useRazorPayLogic from "../Payment/useRazorPayLogic";

export default function useAddressLogic(){



    let INIITAL_STATE = [
        {id: 'address', value: '', error: ''},
        {id: 'landmark', value: '', error: ''},
        {id: 'location', value: '', error: ''}
    ];

    let dispatch = useDispatch();
    let location = useLocation();
    let addressState = useSelector(addressSlice.getAddressState);
    const navigateTo = useNavigate();

    const {} = useRazorPayLogic();
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    let {postAddressData,processApiError} = useAddressApi();

    const [state,setState] = useState(INIITAL_STATE);
    const [dialogueState, setDialogueState] = useState({isOpen:false, message: ""});
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [addressIsSet,setAddressIsSet] = useState("initial");
    const [locationAttempt, setLocationAttempt] =  useState(0);
    const {config}  = useSharedConfig();

    let USER_DATA = getLocalUserData();
    let USER_ID = USER_DATA.user_id; 
    let currentLocalUserData = getLocalUserData();




    function onInnit(){

        currentLocalUserData = getLocalUserData();

        if("address" in currentLocalUserData){
            if(currentLocalUserData.address == ""){

                setAddressIsSet("notSet");
                getCurrentUserLocation();

            }
            else{
                dispatch(addressSlice.getAction_setAddressState(currentLocalUserData));
                setAddressIsSet("set");

            }
        }
        else{
            
            setAddressIsSet("notSet");
            getCurrentUserLocation();

        }

        setIsFirstLoad(false);
    }

    function addressChange(e){
        dispatch(addressSlice.getAction_changeAddressData(e.target.value));
    }

    function landmarkChange(e){
        dispatch(addressSlice.getAction_changeLandmarkData(e.target.value));
    }

    function locationChange(location){
        dispatch(addressSlice.getAction_changeLocationData([location]));
    }

    function goToMap(){

        
        if ( navigator.geolocation ){

            setLocationError("Fetching the current location please wait.");

            navigator.geolocation.getCurrentPosition( navigateToMap, positionError, { 
                enableHighAccuracy: true, 
                timeout: 5000, 
                maximumAge: 0 
            } );
        }

    }

    let nearbyLocation = {lat:'',lng:''};
    function navigateToMap(position){ 

        setLocationError("");

        nearbyLocation = {lat:position.coords.latitude ,lng: position.coords.longitude};
        navigateTo(config.ROOT_PATH+'/Map', {state:{nearbyLocation: nearbyLocation }});

    }

    function setLocationError(error){

        dispatch(addressSlice.getAction_setLocationError(error));
    }

    function getCurrentUserLocation(){

        if ( navigator.geolocation ){

            navigator.geolocation.getCurrentPosition( processCurrentUserLocation, processCurrentLocationError, { 
                enableHighAccuracy: true, 
                timeout: 2000, 
                maximumAge: 0 
            } );
        }
    }

    function processCurrentUserLocation(position){

        console.log("processCurrentUserLocation");
        console.log(position);
    }

    function processCurrentLocationError(err){

        console.log("processCurrentLocationError");
        console.log(err);
    }

    function positionError(err){

        setLocationAttempt((prevState)=>{

            return prevState + 1;
        });
    }

    let newLocalUserData =  {};
    function validate(){

        dispatch(addressSlice.getAction_validateData());
    }
    
    function processApiResponse(data){



        if(data.status == "success"){

            newLocalUserData = {
                ...currentLocalUserData,
                address: addressState.data[0].value,
                landmark: addressState.data[1].value,
                location: addressState.data[2].value
            };

            setLocalUserData(newLocalUserData);
            setAddressIsSet("set");
        }
        else if(data.status == "failed"){
            console.log("failed");
        }
        else{
            console.log("else");
        }


    }

    function closeDialogue(){
        setDialogueState({isOpen:false, message: ""});
    }

    function openDialogue(message){
        setDialogueState({isOpen:true, message: message});
    }








    useEffect(()=>{

        if(isFirstLoad){    onInnit()   }

        if(location.state != null){
            locationChange(location.state.selectedLocation);
        }

    },[])

    let apiPayload = {};
    useEffect(()=>{

        if(addressIsSet == "notSet"){

            if(addressState.isValid){

                apiPayload = {
                    ...addressState,
                    user_id: currentLocalUserData.user_id
                }
    
                postAddressData(apiPayload)
                .then((data)=>{ processApiResponse(data) })
                .catch((err)=>{ processApiError(err) })
            }
        }
       
    },[addressState])


    useEffect(()=>{


        if(addressIsSet == "notSet"){

            if(locationAttempt < 4){
    
                goToMap();
            }
            else if(locationAttempt == 4){
    
                setLocationError("Failed to set loaction. Please try again.");
            }            
        }


    },[locationAttempt])


    const change = {
        addressChange: addressChange,
        landmarkChange: landmarkChange,
        goToMap: goToMap,
        validate: validate,
        openDialogue:openDialogue,
        closeDialogue: closeDialogue
        // InnitializePayment:InnitializePayment
    }

    return{
        navigateTo,
        change,
        state,
        addressState,
        dialogueState,
        addressIsSet
    }


}
