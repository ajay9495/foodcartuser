import { createSlice,current } from "@reduxjs/toolkit";

let initialState = {data:{status:'initial',user_id:'',store_id:''}};

const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{
        setUserData
    }

});



function setUserData(state,action){

    state.data = action.payload.data;

}




function getUserState(state){
    return state.user;
}

function getAction_setUserData(data){
    return {
        type:"user/setUserData",
        payload:{data:data}
    }
}


export const UserStore = {
    getUserState: getUserState,
    getAction_setUserData: getAction_setUserData
}

export default userSlice.reducer;


