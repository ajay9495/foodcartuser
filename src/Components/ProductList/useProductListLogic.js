import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import useProductListApi from './useProductListApi'
import {useLocation} from 'react-router-dom';
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
 
import {productListGetters} from '../../Redux/ProductListSlice'
import {cartGetters} from '../../Redux/CartSlice';
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";

export default function useProductListLogic(){

    let state =  useSelector(productListGetters.getProductListState);
    let cartState = useSelector(cartGetters.getCartState);
    let dispatch = useDispatch();
    let { getProductListData, processApiError } = useProductListApi();
    let location = useLocation();
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const {sharedLibrary} = useSharedLibrary();
    const {config} = useSharedConfig();

    let USER_DATA = getLocalUserData();
    let STORE_ID = USER_DATA.store_id;
    let CATEGORY_ID = location.state.category_id;
    

    function clearPreviousState(){
        dispatch(productListGetters.getAction_clearPreviousState());
    }

    function addButtonChange(product){
        dispatch(productListGetters.getAction_setIsSelected(product));
        dispatch(cartGetters.getAddNewProductAction(product));
    }
 
    function incrementQuantity(product){
        dispatch(productListGetters.getAction_incrementQuantity(product));
        dispatch(cartGetters.getIncrementQuantityAction(product));
    }

    function decrementQuantity(product){
        dispatch(productListGetters.getAction_decrementQuantity(product));
        dispatch(cartGetters.getDecrementQuantityAction(product));
    }


    function processProductListData(data){


        if(data.status == "success"){

            if(data.payload.length > 0){

                dispatch(productListGetters.getAction_setInitialProductList(data.payload,cartState));
            }
            else{
                sharedLibrary.openDialogue("No product found in the server for this category.");
            }
            
        }
        else{
            sharedLibrary.openDialogue("Failed to fetch data from the server.");
        }
    }


    useEffect(()=>{

        clearPreviousState();

        getProductListData(STORE_ID,CATEGORY_ID)
        .then((data)=>  processProductListData(data)    )
        .catch((err)=> processApiError(err)             );


    },[])

    let change = {
        addButtonChange: addButtonChange,
        incrementQuantity: incrementQuantity,
        decrementQuantity:decrementQuantity
    }

    return{
        state,
        cartState,
        change,
        config
    }

}