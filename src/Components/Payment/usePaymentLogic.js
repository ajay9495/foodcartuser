import { useSelector,useDispatch } from "react-redux"; 
import {cartGetters} from '../../Redux/CartSlice';
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";
import usePaymentApi from './usePaymentApi'
import { useState } from "react";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";



export default function usePaymentLogic(){

    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const navigateTo =  useNavigate();
    const state = useSelector(cartGetters.getCartState);
    const { processGetError, sendOrderData } = usePaymentApi();
    const [dialogueState, setDialogueState] = useState({isOpen:false, message: ""});
    const dispatch = useDispatch();
    const {config} = useSharedConfig();
    let USER_DATA = getLocalUserData();

    
    let STORE_ID = config.STORE_ID;
    let USER_ID = USER_DATA.user_id; 

    let selectedItemsList = [];
    let totalData = {totalMrp: 0, totalSavings: 0, totalPrice:0};
    selectedItemsList = state.data.filter((item)=> item.is_selected ); 


    let apiPayload = {};

    function placeOrder(){

        apiPayload = {user_id: USER_ID, store_id: STORE_ID, orders: selectedItemsList}
 
        sendOrderData(apiPayload)
        .then((data)=>{    processSendOrderDataResponse(data)  })
        .catch((err)=>{    processGetError(err)        });

    }

    function processSendOrderDataResponse(data){

        if(data.status == 'success'){

            dispatch(cartGetters.getAction_resetCartState());
            openDialogue("Successfully placed order.");
        }
        else{
            openDialogue("failed to post");
        }
    }


    function closeDialogue(){
        setDialogueState({isOpen:false, message: ""});
    }

    function openDialogue(message){
        setDialogueState({isOpen:true, message: message});
    }


    const change = {
        openDialogue:openDialogue,
        closeDialogue: closeDialogue
    };

    


    return{
        placeOrder,
        dialogueState,
        change
    }
}