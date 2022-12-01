import { useState } from "react";
import {UserStore} from "../../Redux/UserSlice";
import useRegisterApi from './useRegisterApi'
import { useSelector,useDispatch } from "react-redux";
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import { useNavigate,useLocation } from "react-router-dom";
import { DialogueStore } from '../../Redux/DialogueSlice';
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";

export default function useRegisterLogic(){

    const {config} = useSharedConfig();
    const STORE_ID = config.STORE_ID;


    let initialState = [
            {id:'phone',value:'',error:''},
            {id:'password',value:'',error:''},
            {id:'name',value:'',error:''},
            {id:'store_id',value:STORE_ID,error:''}
    ];
 
    const dispatch = useDispatch();
    const [state,setState] = useState(initialState);
    const {sendUserData, processGetError} = useRegisterApi();
    const userState = useSelector(UserStore.getUserState);
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const navigateTo =  useNavigate();
    const loc  = useLocation();
    const {sharedLibrary} = useSharedLibrary();

    

    function phoneNumberChange(e){
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

    function nameChange(e){
        setState((prevState)=>{
            return prevState.map((item)=>{
                if(item.id == 'name'){
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


                if(item.id == 'name'){

                    if(checkIsNull(item.value)){

                        v_isValid = false;
                        return {...item,error:"Required"};
                    }
                    else{
                        return {...item,error:""};
                    }
                }
                else if(item.id == 'phone'){

                    if(isPhoneInValid(item.value)){

                        v_isValid = false;
                        return {...item,error:"Phone number invalid"};
                    }
                    else{
                        return {...item,error:""};
                    }

                }
                else if(item.id == 'password'){

                    if(isNotAtleastFiveDigit(item.value)){

                        v_isValid = false;
                        return {...item,error:"Password must be atleast 5 characters or more"};
                    }
                    else{
                        return {...item,error:""};
                    }
                }
                else{
                    return {...item}
                }


            })

        });



        submit(v_isValid);
    }


    
    function submit(isValid){

        if(isValid == true){

            sendUserData(state)
            .then((data)=>{ processPostResult(data) })
            .catch((err)=>{ processGetError(err); })

        }

    }
 
    let ppr_userData = {};
    function processPostResult(data){

        if(data.status == "success"){

            ppr_userData = {
                status:'loggedIn',
                store_id: state[3].value, 
                user_id: data.payload,
                address:'',
                landmark:'',
                location:{lat:'',lng:''}
            };

            setLocalUserData(ppr_userData);
            dispatch(UserStore.getAction_setUserData(ppr_userData));
            navigateTo('/');

        }
        else if(data.status == "failed"){
            openDialogue(data.message)
        }
        else{
            console.log("request failed");
        }

    } 

    function updateLocalStorage(data){
        window.localStorage.setItem("userData",JSON.stringify(data))
    }

    let glsd_localVl = "";
    let glsd_jsonLocal = "";
    function  getLocalStorageData(){

        glsd_localVl = window.localStorage.getItem("userData");
        glsd_jsonLocal = JSON.parse(glsd_localVl);
        console.log("jsonLocal");
        console.log(glsd_jsonLocal.store_id, glsd_jsonLocal.user_id);
    }
 
    

    let ipi_phoneStr;
    let ipi_regularExpression;
    function isPhoneInValid(input){

        ipi_regularExpression = /^[0-9]{10}$/;

        if(ipi_regularExpression.test(input)){
            return false;
        }
        else{
            return true;
        }
    
    }

    let ipi_regex
    function isPasswordInValid(input){

        //atleast 1 lowercase, 1 uppercase, 1 numeric, one special character !@#$%^&*,length eight characters or more 
        ipi_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        


        if(ipi_regex.test(input)){
            return false;
        }
        else{
            return true;
        }
    }

    function checkIsNull(value){
        if(value == ""){
            return true;
        }
        else{
            return false;
        }
    }


    let infd_regularExpression = '';
    function isNotFiveDigit(input){
        infd_regularExpression = /^[\w|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+]{5,}$/;

        if(infd_regularExpression.test(input)){
            return false;
        }
        else{
            return true;
        }
    }

    let inafd_regularExpression = '';
    function isNotAtleastFiveDigit(input){
        inafd_regularExpression = /^[\w|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+]{5,20}$/;

        if(inafd_regularExpression.test(input)){
            return false;
        }
        else{
            return true;
        }
    }

    function goToLogin(){


        if(loc.pathname == '/'){
            navigateTo('/Login');
        }
        else{
            navigateTo('/');
        }

    }

    function openDialogue(message){
        dispatch(DialogueStore.getAction_openDialogue(message));
    }



    let change = {
        phoneNumberChange: phoneNumberChange,
        passwordChange: passwordChange,
        validate: validate,
        nameChange: nameChange,
        goToLogin: goToLogin
    }

    return {
        state,
        change
    }



}