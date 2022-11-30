import { useLocation, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import {addressSlice} from '../../Redux/AddressSlice'
import { useSelector,useDispatch } from "react-redux";
import useAddressApi from './useAddressApi'
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";

export default function useAddressLogic(){


    let INIITAL_STATE = [
        {id: 'address', value: '', error: ''},
        {id: 'landmark', value: '', error: ''},
        {id: 'location', value: '', error: ''}
    ];

    let {postAddressData,processApiError} = useAddressApi();
    let dispatch = useDispatch();
    let location = useLocation();
    const navigateTo = useNavigate();
    const [state,setState] = useState(INIITAL_STATE);
    let addressState = useSelector(addressSlice.getAddressState);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const {sharedLibrary} = useSharedLibrary();
    const [addressIsSet,setAddressIsSet] = useState("initial");

    function InnitializeLogic(){

        if(isFirstLoad){

            // onInnit();
            setIsFirstLoad(false);
        }
    }


    let initalAddressObj = {};
    let currentLocalUserData = getLocalUserData();

    function onInnit(){

        currentLocalUserData = getLocalUserData();

        if("address" in currentLocalUserData){
            if(currentLocalUserData.address == ""){
                setAddressIsSet("notSet");
            }
            else{
                dispatch(addressSlice.getAction_setAddressState(currentLocalUserData))
                setAddressIsSet("set")
            }
        }
        else{
            
            setAddressIsSet("notSet")
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

            navigator.geolocation.getCurrentPosition( navigateToMap, positionError, { 
                enableHighAccuracy: true, 
                timeout: 15000, 
                maximumAge: 0 
            } );
        }
        else{
            console.log("locatin failed");
        }
    }

    let nearbyLocation = {lat:'',lng:''};
    function navigateToMap(position){ 

        nearbyLocation = {lat:position.coords.latitude ,lng: position.coords.longitude};
        navigateTo('../Map', {state:{nearbyLocation: nearbyLocation }});
    }


    let newLocalUserData =  {};
    function validate(){

        dispatch(addressSlice.getAction_validateData());
    }


    function positionError(err){
        console.log("hello positionError");
    }

    
    function processApiResponse(data){

        console.log("processApiResponse");
        console.log(data);

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

        
      
        // if(data.status == "success"){

        //     newLocalUserData = {
        //         ...currentLocalUserData,
        //         address: addressState.data[0].value,
        //         landmark: addressState.data[1].value,
        //         location: addressState.data[2].value
        //     };

        //     setLocalUserData(newLocalUserData);
        //     dispatch(addressSlice.getAction_setActive());
           

        // }
        // else{
        //     console.log("test address api failed");
        //     console.log(data);
        // }

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


    const change = {
        addressChange: addressChange,
        landmarkChange: landmarkChange,
        goToMap: goToMap,
        validate: validate
    }

    return{
        navigateTo,
        change,
        state,
        addressState,
        addressIsSet
    }
}
