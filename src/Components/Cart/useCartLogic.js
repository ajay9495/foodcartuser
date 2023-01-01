import { useSelector,dispatch } from "react-redux"; 
import {cartGetters} from '../../Redux/CartSlice';
import { useLocation, useNavigate } from "react-router-dom";

export default function useCartLogic(){
 
    const navigateTo =  useNavigate();
    const location = useLocation();
    const state = useSelector(cartGetters.getCartState);


    let selectedItemsList = [];

    let totalData = {totalMrp: 0, totalSavings: 0, totalPrice:0};
    selectedItemsList = state.data.filter((item)=> item.is_selected ); 

    let totalMrp = 0;
    let totalPrice = 0;
    let totalSavings = 0;
    selectedItemsList.forEach((item)=>{
        totalMrp = totalMrp + item.mrp * item.quantity; 
        totalPrice = totalPrice + item.selling_price * item.quantity 
    });
 
    totalSavings = totalMrp - totalPrice;
    totalData = {totalMrp: totalMrp, totalSavings: totalSavings, totalPrice:totalPrice};



    return {
        selectedItemsList,
        totalData,
        navigateTo
    }

}