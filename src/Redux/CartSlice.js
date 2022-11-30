import { createSlice,current } from "@reduxjs/toolkit";

let initialState = {data:[]};

const customCartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addNewProduct,
        incrementQuantity,
        decrementQuantity,
        setPrice,
        resetCartState

    }
})


let stateData = [];
let anp_filtedArr;

function resetCartState(state,action){
    state.data = [];
}

function addNewProduct(state,action){

    stateData = [...current(state.data)];

    anp_filtedArr = stateData.filter((item)=> item.id == action.payload.product.id);

    if(anp_filtedArr.length){

        state.data = stateData.map((item)=>{

            if(item.id == action.payload.product.id){
                return {...item, is_selected: true};
            }
            else{
                return {...item};
            }

        })
    }
    else{
        stateData.push({...action.payload.product, is_selected: true});
        state.data = stateData;
    }


}

function incrementQuantity(state,action){
    
    stateData = state.data;

    state.data = stateData.map((item)=>{

        if(item.id == action.payload.product.id){

            if(item.quantity < 10){
                return {...item, quantity: item.quantity + 1};
            }
            else{
                return {...item}
            }
        }
        else{
            return {...item};
        }
    });

    
}

function decrementQuantity(state,action){
    stateData = current(state.data);

    state.data = stateData.map((item)=>{

        if(item.id == action.payload.product.id){

            if(item.quantity == 1){
                return {...item, is_selected: false};
            }
            else{
                return {...item, quantity: item.quantity -1};
            }
        }
        else{
            return {...item};
        }

    })
    

}

let sp_sellingPriceArr = [];
function setPrice(state,action){
    
    stateData = current(state.data);
    sp_sellingPriceArr = [];

    state.data = stateData.map((item)=>{

        if(item.id == action.payload.product.id){
            

            sp_sellingPriceArr = item.selling_price.map((sellingPriceItem)=>{

                if(sellingPriceItem.id == action.payload.sellingPrice.id){
                    return {...sellingPriceItem, isActive: 'active'};
                }
                else{
                    return {...sellingPriceItem, isActive: 'inActive'};
                }
            })

            return {
                    ...item,
                    current_selling_price: action.payload.sellingPrice,
                    selling_price: sp_sellingPriceArr
            };
            
        }
        else{
            return {...item};
        }

        
    }) 


}



function getCartState(state){
    return state.cart;
}

function getAddNewProductAction(product){
    return {
        type:"cart/addNewProduct",
        payload: {product:product}
    }
}

function getIncrementQuantityAction(product){
    return {
        type: 'cart/incrementQuantity',
        payload: {product:product}
    }
}

function getDecrementQuantityAction(product){
    return {
        type:'cart/decrementQuantity',
        payload: {product: product}
    }
}

function getActionSetPrice(product,sellingPrice){
    
    return {
        type: 'cart/setPrice',
        payload: {product: product, sellingPrice: sellingPrice}
    }
}

function getAction_resetCartState(){
    return{
        type:'cart/resetCartState'
    }
}

export const cartGetters = {
    getAddNewProductAction: getAddNewProductAction,
    getCartState: getCartState,
    getIncrementQuantityAction: getIncrementQuantityAction,
    getDecrementQuantityAction: getDecrementQuantityAction,
    getActionSetPrice: getActionSetPrice,
    getAction_resetCartState: getAction_resetCartState
}

export default customCartSlice.reducer;