import { createSlice, current } from '@reduxjs/toolkit'

let initialState = {data:[],error:""};
let apiData = [];
let stateData = [];
let product = {};



//-----------------------------------slice----------------------------------------

const customSearchSlice = createSlice({

    name:'search',
    initialState,
    reducers:{
        clearPreviousState,
        setInitialResultState,
        setIsSelectedState,
        incrementQuantity,
        decrementQuantity,
        setPrice
    }
});

//-----------------------------------slice----------------------------------------



//-----------------------------------reducer functions----------------------------------------


function clearPreviousState(state,action){
    state.data  = [];
    state.error = ""    
}


let sirs_cartItem = {};
let sirs_cartArr = [];
function setInitialResultState(state,action){

    
    sirs_cartArr = action.payload.cartArr;
    apiData = action.payload.data;
    sirs_cartItem =  {};

    if(apiData.length > 0){

        state.data = apiData.map((item)=>{

            sirs_cartItem =  getItemFromCart(item.id,sirs_cartArr);

            if(Object.keys(sirs_cartItem).length === 0){

                return {
                    ...item,
                    discount: getDiscount(item),
                    quantity:1,
                    is_selected: false
                }

            }
            else{
                return {...sirs_cartItem};
            }




        });

        state.error = "";

    }
    else{
        state.data =  [];
        state.error = 'no data found';
    }

}


let siss_productId  = '';
function setIsSelectedState(state,action){
    
    siss_productId = action.payload.product.id;
    stateData = current(state.data);

    state.data = stateData.map((item)=>{
        
        if(item.id == siss_productId){
            return {...item, is_selected: true};
        }
        else{
            return {...item};
        }
        
    })

    

}


function incrementQuantity(state, action)
{
    product = {};
    stateData = current(state.data);
    product = action.payload.product;

    state.data = stateData.map((item)=>{

        if(item.id == product.id){
            if(item.quantity < 10){
                return {...item, quantity: item.quantity + 1}
            }
            else{
                return {...item};
            }
        }
        else{
            return {...item};
        }

    })

}

function decrementQuantity(state, action){

    
    stateData = current(state.data);
    product = action.payload.product;

    state.data = stateData.map((item)=>{

        if(item.id == product.id){

            if(item.quantity == 1 ){
                return {...item, is_selected: false};
            }
            else{
                return {...item, quantity: item.quantity -  1}
            }


        }
        else{
            return {...item};
        }

    })



}

let sp_selectedSellingPrice;
let sp_sellingPriceArr;
function setPrice(state,action){
    
    stateData = current(state.data);
    product = action.payload.product;
    sp_selectedSellingPrice = action.payload.sellingPrice;
    sp_sellingPriceArr = [];



    state.data = stateData.map((item)=> {

        if(item.id == product.id){

            sp_sellingPriceArr = item.selling_price.map((sellingPriceItem)=>{

                if(sellingPriceItem.id == sp_selectedSellingPrice.id){
                    return {...sellingPriceItem, isActive: "active"}
                }
                else{
                    return {...sellingPriceItem, isActive: "inactive"}
                }
            })


            return {
                ...item, 
                current_selling_price: sp_selectedSellingPrice, 
                selling_price: sp_sellingPriceArr
            }

        }
        else{
            return {...item};
        }

    })


}


//-----------------------------------end reducer functions----------------------------------------



let gicsp_sellingPriceItem = {};
function getInitialCurrentSellingPrice(sellingPriceArr){

    gicsp_sellingPriceItem = {};
    sellingPriceArr = JSON.parse(sellingPriceArr);

    sellingPriceArr.forEach((item) => {
        if(item.id == 'sellingPrice_1'){
            gicsp_sellingPriceItem = item;
        }            
    }); 

    return {...gicsp_sellingPriceItem, isActive: "active"};

}

let gim_mrpItem = {};
function getInitialCurrentMrp(mrpArr){
    
    gim_mrpItem = {};
    mrpArr = JSON.parse(mrpArr);

    mrpArr.forEach((item)=>{
        if(item.id == 'mrp_1'){
            gim_mrpItem = item;
        }
    });

    return gim_mrpItem;
}


let gifc_item = {};
function getItemFromCart(id,cartArr){

    gifc_item = {};

    cartArr.forEach((item)=>{
        if(item.id == id){
            gifc_item = item;
        }
    });

    return gifc_item;

}

function getInitialSellingPrice(sellingPriceArr){

    sellingPriceArr = JSON.parse(sellingPriceArr);

    return sellingPriceArr.map((item)=>{

        if(item.id == 'sellingPrice_1'){
            return {...item, isActive: "active"};
        }
        else{
            return {...item, isActive: "inActive"};
        }
    });



}


let gd_sellingPrice;
let gd_mrp;

function getDiscount(item){

    gd_sellingPrice = item.selling_price;
    gd_mrp = item.mrp;

    if(gd_sellingPrice < gd_mrp){

        return parseInt(((gd_mrp - gd_sellingPrice)/gd_mrp)*100)
    }
    else{
        return 0;
    }

}

//-----------------------------------getters----------------------------------------

function getSearchState(state){
    return state.search;
}

function getTestReducerAction(data){

    return {
        type: 'search/testReducer',
        payload: data
    }

}

function getAction_setInitialState(data,cartArr){
    return {
        type:"search/setInitialResultState",
        payload: {data: data, cartArr: cartArr}
    }
}

function getAction_setIsSelectedState(product){
    return {
        type: 'search/setIsSelectedState',
        payload: {product: product}
    }
}

function getAction_incrementQuantity(product){
    return{
        type: 'search/incrementQuantity',
        payload: {product: product}
    }
}

function getAction_decrementQuantity(product){
    return {
        type: 'search/decrementQuantity',
        payload: {product: product}
    }
}

function getAction_setPrice(sellingPrice,product){
    return {
        type:"search/setPrice",
        payload: {product: product, sellingPrice: sellingPrice}
    }
}

function getAction_clearPreviousState(){
    return {
        type:"search/clearPreviousState"
    }
}


//-----------------------------------end getters----------------------------------------



export const searchGetters = {
    getSearchState:getSearchState,
    getTestReducerAction: getTestReducerAction,
    getAction_setInitialState: getAction_setInitialState,
    getAction_setIsSelectedState: getAction_setIsSelectedState,
    getAction_incrementQuantity: getAction_incrementQuantity,
    getAction_decrementQuantity: getAction_decrementQuantity,
    getAction_setPrice: getAction_setPrice,
    getAction_clearPreviousState: getAction_clearPreviousState
}



export default customSearchSlice.reducer;