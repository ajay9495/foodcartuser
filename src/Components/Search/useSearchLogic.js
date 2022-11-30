import { useEffect, useState } from "react";
import useSearchApi from "./useSearchApi";
import { useSelector, useDispatch } from "react-redux";
import { cartGetters } from "../../Redux/CartSlice";
import { searchGetters } from "../../Redux/SearchSlice";
import { clear } from "@testing-library/user-event/dist/clear";
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";

export default function useSearchLogic(){


    const INITIAL_STATE = [
        {id:'keyword', value: [], error: "initial"},
    ];

    const INITIAL_RESULT_STATE = {
        id:'result',value:[], error: 'initial error'
    }

    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const [state,setState] = useState(INITIAL_STATE);
    const [resultState, setResultState] = useState(INITIAL_RESULT_STATE)
    const {getSearchData, processApiError} = useSearchApi();
    const cartState = useSelector(cartGetters.getCartState);
    const searchState = useSelector(searchGetters.getSearchState);
    const dispatch = useDispatch();
    const {sharedLibrary} = useSharedLibrary();
    const {config} = useSharedConfig();

    let USER_DATA = getLocalUserData();
    let STORE_ID = USER_DATA.store_id;
    let USER_ID = USER_DATA.user_id;


    function clearPreviousState(){
        dispatch(searchGetters.getAction_clearPreviousState());
    }

    function keywordChange(e){
    
        setState((prevState)=>{

            return prevState.map((item)=>{
                if(item.id == 'keyword'){
                    return {...item, value: e.target.value}
                }
                else{
                    return {...item}
                }
            });
        });
        
    }

    function checkIsNotNull(item){
        if(item == ""){
            return false;
        }
        else{
            return true;
        }

    }

    function processSearchResult(data){


        if(data.status == "success"){

            if(data.payload.length > 0){

                dispatch(searchGetters.getAction_setInitialState(data.payload,cartState.data));
            }
            else{
                sharedLibrary.openDialogue("No results found for this keyword.");
            }
        }
        else{
            sharedLibrary.openDialogue("Failed to fetch data from the server.");
        }
  
    }

    function additem(product){

        dispatch(searchGetters.getAction_setIsSelectedState(product));
        dispatch(cartGetters.getAddNewProductAction(product));
    } 

    function incrementQuantity(product){
        dispatch(searchGetters.getAction_incrementQuantity(product));
        dispatch(cartGetters.getIncrementQuantityAction(product));
    }

    function decrementQuantity(product){
        dispatch(searchGetters.getAction_decrementQuantity(product));
        dispatch(cartGetters.getDecrementQuantityAction(product));
    }

    function setOffer(sellingPrice,product){
        dispatch(searchGetters.getAction_setPrice(sellingPrice,product));
        dispatch(cartGetters.getActionSetPrice(product,sellingPrice));
    }


    //onMount
    useEffect(()=>{
        
        clearPreviousState();

    },[])


    let delayFunction;
    //onChangeKeywordState
    useEffect(()=>{ 

        
        delayFunction = setTimeout(() => {

            if(checkIsNotNull(state[0].value)){

                getSearchData(state[0].value, STORE_ID)
                .then((data)=> processSearchResult(data))
                .catch((err)=> processApiError(err))

            }

        }, 1000);

        return () => clearTimeout(delayFunction);

    },[state]);


    let change = {
        keywordChange: keywordChange,
        additem: additem,
        incrementQuantity: incrementQuantity,
        decrementQuantity: decrementQuantity,
        setOffer: setOffer
    }

    return {
        state,
        resultState,
        searchState,
        change,
        config
    }




}