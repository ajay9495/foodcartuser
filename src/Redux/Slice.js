import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
};


const customSlice = createSlice({ 

    name:"category",
    initialState,
    reducers:{
        setCategoryData(state,action){
            return {...state, data: action.payload}
        }
    }


});


export function getCategoryState(state){
    return state.main;
}

export function setCategoryState(data){
    return {
        type:"category/setCategoryData",
        payload: data 
    }
}


export const {increment,decrement} = customSlice.actions;      
export default customSlice.reducer


