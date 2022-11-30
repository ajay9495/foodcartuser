import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getCategoryState, setCategoryState } from "../../Redux/Slice";
import useCategoryApi from './useCategoryApi'
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import { DialogueStore } from '../../Redux/DialogueSlice';
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";


export default function useCategoryLogic(){

    let state = useSelector(getCategoryState);
    let dispatch = useDispatch();
    let navigateTo = useNavigate();
    const { loadCategoryData, processGetError} = useCategoryApi();
    const {getLocalUserData} = useLocalStorage();
    const {config} = useSharedConfig();


    let USER_DATA = getLocalUserData();
    let STORE_ID = USER_DATA.store_id;
    

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
        
    },[]);

    return{
        state,
        navigateTo,
        config
    }

}
