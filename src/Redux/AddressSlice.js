import { createSlice,current } from "@reduxjs/toolkit";

let initialState = {
    isActive:"initial",
    isValid:false,
    data:[
        {id:'address',value:'',error:''},
        {id:'landmark',value:'',error:''},
        {id:'location',value:[{lat:'',lng:''}],error:''}
    ]
};

let initialData = [
    {id:'address',value:'',error:''},
    {id:'landmark',value:'',error:''},
    {id:'location',value:[{lat:'',lng:''}],error:''}
];

let addressState = {};
let addressData = [];


const customAddressSlice = createSlice({
    name:'address',
    initialState,
    reducers:{
        changeAddressData,
        changeLandmarkData,
        changeLocationData,
        validateData,
        setInitialState,
        toggleIsActive,
        setAddressState,
        setActive,
        setInActive
    }
});


let sas_address = "";
let sas_landmark = "";
let sas_location = {lat:"",lng:""};

function setAddressState(state,action){


    sas_address = action.payload.data.address;
    sas_landmark = action.payload.data.landmark;
    sas_location = action.payload.data.location;

    state.isActive = "active";
    state.data = [
        {id:'address',value: sas_address,error:''},
        {id:'landmark',value: sas_landmark,error:''},
        {id:'location',value: sas_location,error:''}
    ];

}

function setActive(state,action){

    state.isActive = "active";
}

function setInActive(state,action){

    state.isActive = "inActive";
}

let tia_isActive = "";
function toggleIsActive(state,action){

    addressState = current(state);
    tia_isActive = addressState.isActive

    console.log("tia_isActive");
    console.log(tia_isActive);

    if(tia_isActive == "active"){ state.isActive = "inActive" }
    else{ state.isActive = "active" }

}

function setInitialState(state,action){

    console.log("helllo setInitialState");
    state.isValid = false;
    state.data = initialData;


}

function changeAddressData(state,action){

    state.data[0].value = action.payload.address;
}

function changeLandmarkData(state, action){
    state.data[1].value = action.payload.landmark
}

function changeLocationData(state, action){
    state.data[2].value = action.payload.location;
}


let isValid = true;
function validateData(state, action){

    isValid = true;
    addressState = current(state);

    addressData = addressState.data.map((item)=>{

        if(item.id == "address"){
            
            if(item.value == ""){

                isValid = false;
                return {...item,error:"Required !"}
            }
            else{
                return {...item, error:""}
            }
        }
        else if(item.id == "location"){
            if((item.value[0].lat == "")||(item.value[0].lng == "")){
                
                isValid = false;
                return {...item, error:"Required !"};
            }
            else{
                return {...item, error:""};
            }
        }
        else {
            
            return {...item, error:""};
        }

    });

    state.data = addressData;

    if(isValid){

        state.isValid = true;
    }
    else{
        state.isValid = false;
    }

}




function getAction_setInitialState(){
    
    return{
        type:"address/setInitialState"
    }
}

function getAddressState(state){
    return state.address;
}

function getAction_changeAddressData(address){
    
    return {
        type:"address/changeAddressData",
        payload: {address:address}
    }
}

function getAction_changeLandmarkData(landmark){
    return {
        type:"address/changeLandmarkData",
        payload: {landmark: landmark}
    }
}

function getAction_changeLocationData(location){
    return{
        type:"address/changeLocationData",
        payload:{location: location}
    }
}

function getAction_validateData(){
    
    return {
        type:"address/validateData"
    }
}

function getAction_toggleIsActive(){

    return{
        type:'address/toggleIsActive'
    }

}

function getAction_setAddressState(data){
    return{
        type:"address/setAddressState",
        payload:{data:data}
    }
}

function getAction_setActive(){
    return{
        type:"address/setActive"
    }
}

function getAction_setInActive(){
    return{
        type:"address/setInActive"
    }
}




export const addressSlice = {
    getAddressState: getAddressState,
    getAction_changeLandmarkData: getAction_changeLandmarkData,
    getAction_changeAddressData: getAction_changeAddressData,
    getAction_changeLocationData: getAction_changeLocationData,
    getAction_validateData: getAction_validateData,
    getAction_setInitialState: getAction_setInitialState,
    getAction_toggleIsActive: getAction_toggleIsActive,
    getAction_setAddressState: getAction_setAddressState,
    getAction_setActive: getAction_setActive,
    getAction_setInActive: getAction_setInActive

}

export default customAddressSlice.reducer;