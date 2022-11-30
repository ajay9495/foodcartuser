import { SixtyFpsSelectSharp } from "@mui/icons-material";
import { createSlice,current } from "@reduxjs/toolkit";



const initialState ={
    data: []
}

let stateData = [];
let product = {};
let iqd_productId = 1;
let dqd_productId = 1;
let sisd_productId = 1;

let ssis_newSellingPrice = [];
let ssid_currentSellingPriceQuantity = 1;
let ssid_currentMrpQuantity = 1;
let mrpArr = [];

let sipd_data = [];
let sipd_cartState = {};
let sipd_cartItem = {};

let gcsp_sellingPrice = {};
let gcmrp_mrp = {};
let gifc_item = {};


const customSlice = createSlice({
    name:"productList",
    initialState,
    reducers:{
        setInitialProductListData,
        setPriceData,
        setIsSelectedData,
        incrementQuantityData,
        decrementQuantityData,
        clearPreviousState
    }
});


function clearPreviousState(state,action){
    
    state.data = [];
}

function incrementQuantityData(state,action){
    
    stateData = current(state.data);
    iqd_productId = action.payload.id;

    state.data = stateData.map((item)=>{

        if(item.id == iqd_productId){
            
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

    });
    
}

function decrementQuantityData(state,action){
    
    stateData = current(state.data);
    dqd_productId = action.payload.id;

    state.data = stateData.map((item)=>{

        if(item.id == dqd_productId){
            if(item.quantity == 1){
                
                return {...item, is_selected: false}
            }
            else{
                return {...item, quantity: item.quantity - 1}
            }

        }
        else{
            return {...item};
        }

    });
    
}

function setIsSelectedData(state,action){
   
    sisd_productId = action.payload.id;
    stateData = current(state.data);
    
    state.data = stateData.map((item)=>{

        if (item.id == sisd_productId) {
            return {...item, is_selected: true}
        }
        else{
            return{...item};
        }
    });


}

function setPriceData(state,action){

    
    stateData = current(state.data);

    state.data = stateData.map((item)=>{

        if(item.id == action.payload.product.id){

            ssis_newSellingPrice = item.selling_price.map((item)=>{

                if(item.id == action.payload.selling_price.id){
                    return({...item, isActive: 'active'});
                }
                else{
                    return({...item, isActive: 'inActive'});
                }
            });

            return {
                ...item, 
                selling_price: ssis_newSellingPrice,
                current_selling_price: action.payload.selling_price,
                current_mrp: item.mrp[0]
            }
        }
        else{
            return {
                ...item
            }
        }

    });

}

function setInitialProductListData(state,action){

    sipd_cartItem = {};
    sipd_data = action.payload.data;
    sipd_cartState = action.payload.cartState;



    state.data =  sipd_data.map((item)=>{

        sipd_cartItem = getItemFromCart(item.id,sipd_cartState.data);

        if(Object.keys(sipd_cartItem).length === 0){

            return {
                ...item, 
                mrp: getInitialMrp(item.mrp), 
                selling_price: getInitialSellingPrice(item.selling_price),
                is_selected: false,
                quantity:1,
                current_selling_price: getCurrentSellingPrice(item.selling_price),
                current_mrp: getCurrentMrp(item.mrp)
            }            
            
        }
        else{
            return {...sipd_cartItem}
        }



    });

}

function getInitialMrp(mrp){

    mrp = JSON.parse(mrp);
    return mrp.map((item)=>{
        
        if(item.id == "mrp_1"){
            return {...item, isActive: 'active'};
        }
        else{
            return {...item, isActive: 'inActive'}
        }
    });
}

function getInitialSellingPrice(sellingPrice){

    sellingPrice = JSON.parse(sellingPrice);


    return sellingPrice.map((item,index)=>{

        if (item.id == "sellingPrice_1") {
            return {...item, isActive:'active' }
        }
        else{
            return {...item, isActive:'inActive' }
        }
    })
}

function getCurrentSellingPrice(sellingPrice){
    
    gcsp_sellingPrice = {id:'sellingPrice_1',value:{quantity:0,price:0}, isActive: 'active'};
    sellingPrice = JSON.parse(sellingPrice);

    sellingPrice.forEach((item) => {

        if(item.id == "sellingPrice_1"){
            gcsp_sellingPrice =  {...item, isActive: 'active'};
        }    
    });

    return gcsp_sellingPrice;
    
}

function getCurrentMrp(mrp){

    gcmrp_mrp = {id:'mrp_1',value:{quantity:0,price:0}, isActive: 'active'};
    mrp = JSON.parse(mrp);

    mrp.forEach((item)=>{

        if(item.id == "mrp_1"){
            gcmrp_mrp =  {...item, isActive: 'active'};
        }
    });

    return gcmrp_mrp;

}

function getItemFromCart(id,cartArr){

    gifc_item = {};

    cartArr.forEach((item)=>{
        if(item.id == id){
            gifc_item = item;
        }
    });

    return gifc_item;

}




export function getProductListState(state){
    return state.productList;
}

export function getAction_setInitialProductList(data,cartState){
    return {
        type: 'productList/setInitialProductListData',
        payload: {data: data, cartState: cartState}
    }
}

export function getAction_setPrice(product,selling_price){

    return {
        type: 'productList/setPriceData',
        payload:{product: product, selling_price: selling_price}
    }
}

export function getAction_setIsSelected(product){

    return{
        type:'productList/setIsSelectedData',
        payload: product
    }
}

export function getAction_incrementQuantity(product){
    
    return{
        type: 'productList/incrementQuantityData',
        payload: product
    }

}

function getAction_decrementQuantity(product){
    
    return{
        type: 'productList/decrementQuantityData',
        payload: product
    }

}

function getAction_clearPreviousState(){
    
    return {
        type:"productList/clearPreviousState"
    }
}



export const productListGetters = {
    getAction_clearPreviousState: getAction_clearPreviousState,
    getAction_decrementQuantity: getAction_decrementQuantity,
    getAction_incrementQuantity: getAction_incrementQuantity,
    getAction_setIsSelected: getAction_setIsSelected,
    getAction_setPrice: getAction_setPrice,
    getAction_setInitialProductList: getAction_setInitialProductList,
    getProductListState: getProductListState

}

export default customSlice.reducer;
