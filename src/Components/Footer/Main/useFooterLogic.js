import { useSelector, dispatch } from "react-redux";    
import {cartGetters} from "../../../Redux/CartSlice";

export default function useFooterLogic(){


    const state = useSelector(cartGetters.getCartState);

    let selectedItemList = [];
    let totalQuantity = 0;

    selectedItemList  = state.data.filter((item)=> item.is_selected);

    totalQuantity = selectedItemList.reduce((sum,item)=>{
        return sum + item.quantity;
    },0)


    return{
        totalQuantity
    }

}