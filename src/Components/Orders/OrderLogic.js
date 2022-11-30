import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import useOrdersApi from './OrderApi'
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import { DialogueStore } from '../../Redux/DialogueSlice';
import { useSelector,useDispatch } from "react-redux";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";

export default function useOrdersLogic(){

    let INITIAL_STATE = {
        data:[],
        error:"initial error"
    }; 

    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const navigateTo = useNavigate();
    const [state,setState] = useState(INITIAL_STATE);
    const { getOrdersData, processApiError} =  useOrdersApi();
    const dispatch = useDispatch();
    const {config} = useSharedConfig();


    let USER_DATA = getLocalUserData();
    let STORE_ID = USER_DATA.store_id;
    let USER_ID = USER_DATA.user_id;


    function processOrdersData(data){


        if(data.status == "success"){

            if(data.payload.length > 0){

                setState((prevState)=>{
                    return({
                        ...prevState,
                        data: Object.values(data.payload),
                        error:""
                    })
                });

            }
            else{
                dispatch(DialogueStore.getAction_openDialogue("No previous orders data found in server."));
            }

        }
        else if(data.status == "failed"){

            dispatch(DialogueStore.getAction_openDialogue(data.message));

        }
        else{
            dispatch(DialogueStore.getAction_openDialogue("Could not connect to server"));
        }


    }

    useEffect(()=>{

        getOrdersData(USER_ID)
        .then((data)=>{ processOrdersData(data) })
        .catch((err)=>{ processApiError(err)})

    },[])

    let change = {
        navigateTo:navigateTo
    }

    return {
        state,
        change,
        config
    }


}

