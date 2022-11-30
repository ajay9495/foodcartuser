
import {useEffect, useState} from 'react';
import useOrderDetailsApi from './useOrderDetailsApi';
import {useLocation} from 'react-router-dom';
import { DialogueStore } from '../../Redux/DialogueSlice';
import { useSelector,useDispatch } from "react-redux";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";

export function useOrderDetailsLogic(){

    const INITIAL_STATE = {
        data:[]
    }

    const [state,setState] = useState(INITIAL_STATE);
    const { getOrderDetailsData, processApiError } = useOrderDetailsApi();
    let location = useLocation();
    const dispatch = useDispatch();
    const {sharedLibrary} = useSharedLibrary();

    let ORDER_ID = location.state.order_id;


    function processApiData(data){

        if(data.status == "success"){

            if(data.payload.length > 0){

                setState((prevState)=>{
                    return {
                        ...prevState,
                        data: data.payload
                    };
                });
            }
            else{   
                sharedLibrary.openDialogue("No data found in the server.");
            }

        }
        else if(data.status == "failed"){

            sharedLibrary.openDialogue(data.message);
        }
        else{
            sharedLibrary.openDialogue("Could not connect to server");
        }

    }

    useEffect(()=>{

        getOrderDetailsData(ORDER_ID)
        .then((data)=>{ processApiData(data) })
        .catch((err)=>{ processApiError(err) })

    },[])

    return{
        state
        
    }

    
}