import { useState, useEffect } from "react";
import {UserStore} from "../../Redux/UserSlice";
import { useSelector,useDispatch } from "react-redux";
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useLoginApi from "./useLoginApi";
import { DialogueStore } from '../../Redux/DialogueSlice';
import { useNavigate, useLocation } from "react-router-dom";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";


export default function useLoginLogic(){

 
    let INITITAL_STATE = [
            {id:'phone',value:'',error:''},
            {id:'password',value:'',error:''}
    ];

    const [state,setState] = useState(INITITAL_STATE);
    const { sendLoginData, processApiError } = useLoginApi();
    const dispatch = useDispatch();
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const [dialogueState, setDialogueState] = useState({isOpen:false, message: ""});
    const navigateTo =  useNavigate();
    const loc  = useLocation();
    const {sharedLibrary} = useSharedLibrary();
    const {config} = useSharedConfig();




    function phoneChange(e){
        setState((prevState)=>{
            return prevState.map((item)=>{
                if(item.id == 'phone'){
                    return {...item,value: e.target.value, error:''}
                }
                else{
                    return {...item}
                }
            })
        })
    }

    function passwordChange(e){
        setState((prevState)=>{
            return prevState.map((item)=>{
                if(item.id == 'password'){
                    return {...item,value: e.target.value, error:''}
                }
                else{
                    return {...item}
                }
            })
        })
    }


    let v_isValid = true;
    function validate(){
        
        v_isValid = true;
        setState((prevState)=>{

            return prevState.map((item)=>{

                return validateIsNull(item);

            })
        });

        submit(v_isValid);
    }



    function validateIsNull(item){

        if(item.value != ""){
            
            return {...item,error:""};
        }
        else{
            v_isValid = false;
            return {...item,error:"Required"};
        }
    }

    
    function submit(isValid){

        if(isValid == true){
            
            sendLoginData(state)
            .then((data)=>{ processPostResult(data) })
            .catch((err)=>{ processApiError(err); })

        }
        else{
            console.log(" not valid");
        }

    }

    let userData = {};
    function processPostResult(data){


        if(data.status == "success"){

            if(data.payload.address == ""){

                userData = {
                    status:'loggedIn',
                    store_id: data.payload.store_id, 
                    user_id: data.payload.user_id,
                    address:'',
                    landmark:'',
                    location:{lat:'',lng:''}
                }; 
            }
            else{
                userData = {
                    status:'loggedIn',
                    store_id: data.payload.store_id, 
                    user_id: data.payload.user_id,
                    address:data.payload.address,
                    landmark:data.payload.landmark,
                    location: data.payload.location,
                };
            }

            
            setLocalUserData(userData);

            dispatch(UserStore.getAction_setUserData(userData));   
            navigateTo(config.ROOT_PATH);  

            
            // setTimeout(()=>{

            //     dispatch(UserStore.getAction_setUserData(userData));   
            //     navigateTo(config.ROOT_PATH);   
                             
            // },1000);

            // //open new app activity
            // window.open("sample://activity?user_id="+data.payload.user_id+"&store_id="+data.payload.store_id);

            
            
        }
        else if(data.status == "failed"){

            sharedLibrary.openDialogue(data.message);
        }

    }


    function openDialogue(message){
      dispatch(DialogueStore.getAction_openDialogue(message));
    }

    function goToRegister(){

        if(loc.pathname == config.ROOT_PATH){
            navigateTo(config.ROOT_PATH+'/Register');
        }
        else{
            navigateTo(config.ROOT_PATH);
        }

    }



    const change = {
        passwordChange: passwordChange,
        validate: validate,
        goToRegister: goToRegister,
        phoneChange: phoneChange
    }

    return{
        change,
        state,
        dialogueState
    }


}
