import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getCategoryState, setCategoryState } from "../../Redux/Slice";
import useCategoryApi from './useCategoryApi'
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import { DialogueStore } from '../../Redux/DialogueSlice';
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";
import useCookies from "../../SharedModules/Cookies/useCookies";

export default function useCategoryLogic(){

    let state = useSelector(getCategoryState);
    let dispatch = useDispatch();
    let navigateTo = useNavigate();
    const { sendVisitorData,loadCategoryData, processGetError} = useCategoryApi();
    const {getLocalUserData} = useLocalStorage();
    const {config} = useSharedConfig();
    let USER_DATA = getLocalUserData();
    let {cookie} = useCookies();

 
    let STORE_ID = config.STORE_ID;
    let cookieData = "";
    let newCookieData = {};
    let visitor = {};

    
    function processCategoryData(data){

        if(data.status == "success"){

            if(data.payload.length > 0){
                dispatch(setCategoryState(data.payload));
            }
            else{
                dispatch(DialogueStore.getAction_openDialogue("No category data found in the server"));
            }
        }
        else{

            dispatch(DialogueStore.getAction_openDialogue(data.message));
        }
    }
    
    useEffect(()=>{

        loadCategoryData(STORE_ID)
        .then((data)=> processCategoryData(data)    )
        .catch((err)=> processGetError(err)         );


        cookieData = cookie.getCookie("data");

        if(cookieData == ""){

            newCookieData = {"status":"active"};
            cookie.setCookie(newCookieData);

            visitor = {user_id:USER_DATA.user_id,store_id:STORE_ID};
            sendVisitorData(visitor)

        }

        
    },[]);

    return{
        state,
        navigateTo,
        config
    }

}
