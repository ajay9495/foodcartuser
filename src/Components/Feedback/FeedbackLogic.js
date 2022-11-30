import { useState } from "react"; 

import useFeedbackApi from './FeedbackApi'
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";

export default function useFeedbackLogic(){

    
    const {sendFeedbackData, processGetError} = useFeedbackApi();
    const [state, setState] = useState({feedback: ""});
    const [dialogueState, setDialogueState] = useState({isOpen:false, message: ""});
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const {sharedLibrary} = useSharedLibrary();

    let USER_DATA = getLocalUserData();
    let STORE_ID = USER_DATA.store_id;
    let USER_ID = USER_DATA.user_id;

    function feedbackChange(e){

        setState((prevState)=>{
            return(
                {...prevState, feedback: e.target.value}
            );
        })
        
    }

    function submitFeedback(){

        sendFeedbackData(state,USER_ID)
        .then((data)=>{     processSubmitFeedbackRequest(data)  })
        .catch((err)=>{     processGetError(err)                });

    }

    function processSubmitFeedbackRequest(data){

        if(data.status == "success"){

            sharedLibrary.openDialogue("Successfully submitted the feedback to the server.");
        }
        else{
            sharedLibrary.openDialogue("Failed to submit the feedback in the server.Please try again later.");
        }
    }

    function validate(e){
        if(state.feedback == ""){
            setDialogueState({isOpen:true, message: 'Feedback field is empty'});
        }
        else{
            submitFeedback();
        }
    }

    function closeDialogue(){
        setDialogueState({isOpen:false, message: ""});
    }

    function openDialogue(message){
        setDialogueState({isOpen:true, message: message});
    }


    let change = {
        submitFeedback: submitFeedback,
        feedbackChange: feedbackChange,
        closeDialogue: closeDialogue,
        openDialogue: closeDialogue,
        validate: validate
    }

    return {
        change,
        dialogueState
    }

 
}

