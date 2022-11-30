import { useSelector,dispatch } from "react-redux"; 
import {cartGetters} from '../../Redux/CartSlice';
import { useNavigate } from "react-router-dom";

export default function useCartLogic(){
 
    const navigateTo =  useNavigate();
    const state = useSelector(cartGetters.getCartState);

    let selectedItemsList = [];
    let totalData = {totalMrp: 0, totalSavings: 0, totalPrice:0};
    selectedItemsList = state.data.filter((item)=> item.is_selected ); 

    let totalMrp = 0;
    let totalPrice = 0;
    let totalSavings = 0;
    selectedItemsList.forEach((item)=>{
        totalMrp = totalMrp + (item.current_selling_price.value.quantity * item.current_mrp.value.price) * item.quantity; 
        totalPrice = totalPrice + (item.current_selling_price.value.quantity * item.current_selling_price.value.price) * item.quantity 
    });
 
    totalSavings = totalMrp - totalPrice;
    totalData = {totalMrp: totalMrp, totalSavings: totalSavings, totalPrice:totalPrice};



    return {
        selectedItemsList,
        totalData,
        navigateTo
    }

}