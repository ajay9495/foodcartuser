import { createSlice,current } from "@reduxjs/toolkit";

let initialState = {data:{isActive:false,message:""}};

const dialogueSlice = createSlice({

    name:'dialogue',
    initialState,
    reducers:{
        openDialogue,
        closeDialogue
    }

});



function openDialogue(state,action){
    

    state.data = {isActive:true,message: action.payload.message};

}

function closeDialogue(state,action){

    state.data = {isActive:false,message:""};

}



function getDialogueState(state){
    return state.dialogue;
}

function getAction_closeDialogue(data){
    return {
        type:"dialogue/closeDialogue"
    }
}

function getAction_openDialogue(message){
    return {
        type:"dialogue/openDialogue",
        payload:{message: message}
    }
}


export const DialogueStore = {
    getDialogueState: getDialogueState,
    getAction_closeDialogue: getAction_closeDialogue,
    getAction_openDialogue: getAction_openDialogue
}

export default dialogueSlice.reducer;


