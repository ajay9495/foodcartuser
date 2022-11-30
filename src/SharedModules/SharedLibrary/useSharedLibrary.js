import { useSelector,useDispatch } from "react-redux";
import { DialogueStore } from "../../Redux/DialogueSlice";

export default function useSharedLibrary(){

    const dispatch = useDispatch();


    function openDialogue(message){

        dispatch(DialogueStore.getAction_openDialogue(message));
    }
    
    function refreshPage(){
        window.location.reload();
    }

    const sharedLibrary ={
        openDialogue: openDialogue,
        refreshPage: refreshPage
    }

    return {    sharedLibrary     }


}


