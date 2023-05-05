
import { useEffect } from "react";
import {cartGetters} from '../../Redux/CartSlice'
import { useSelector,useDispatch } from "react-redux";
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";
import usePaymentApi from "./usePaymentApi";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";

export default function useRazorPayLogic(){

    let dispatch = useDispatch();
    const cartState = useSelector(cartGetters.getCartState);
    
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const { processGetError, sendOrderData } = usePaymentApi();
    const {config}  = useSharedConfig();

    var rzp1 = {};
    var API_KEY = config.RAZORPAY_API_KEY;
    var ORDER_ID = "";
    let totalPrice = 0;
    let USER_DATA = getLocalUserData();

    let STORE_ID = config.STORE_ID;
    let USER_ID = USER_DATA.user_id; 
    let selectedItemsList = [];
    selectedItemsList = cartState.data.filter((item)=> item.is_selected );

    function setupRazorpay(){

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = function() {

            var options = {
                "key": API_KEY, // Enter the Key ID generated from the Dashboard
                "amount": getTotalPrice(selectedItemsList)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Sellory", //your business name
                "description": "Test Transaction",
                "image": "https://marketplace.canva.com/EAFMNm9ybqQ/1/0/1600w/canva-gold-luxury-initial-circle-logo-qRQJCijq_Jw.jpg",
                "order_id": ORDER_ID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                // "callback_url": "http://localhost:3000/thankyou/",

                "handler": onPaymentSuccess,

                "prefill": {
                    "name": "Praveen Kumar", //your customer's name
                    "email": "praveen.kumar@example.com",
                    "contact": "8909740400"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            rzp1 = new Razorpay(options);

            document.getElementById('rzp-button1').onclick = function(e){

                getOrderId()
                .then((result) => {

                    ORDER_ID = result.order_id;

                    rzp1.open();
                    e.preventDefault();    
                    
                    console.log("hello razor getOrderId");

        
                })
                .catch((err)=>{
                    console.log("there was an error the response");
                });


            }

            rzp1.on('payment.failed', onPaymentFailure);

        }
    }


    function getTotalPrice(selectedItemsList) {

        selectedItemsList.forEach((item)=>{
            totalPrice = totalPrice + item.selling_price * item.quantity 
        });

        return totalPrice;
    }

    function getOrderId(){

        var REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
 
        var request = new Request("http://139.59.47.30/createOrder",REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());
    }

    function onPaymentSuccess(response){

        sendPaymentDataToServer(response)
        .then((result) => {

            placeOrder();

        })
        .catch((err)=>{
            console.log("there was an error the response");
        })

    }

    function onPaymentFailure(response){

        console.log("payment was failure");
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
    }

    function sendPaymentDataToServer(response){

        var REQUEST_OPTIONS = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(response)
        };
 
        var request = new Request("http://139.59.47.30/savePayment",REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());


    }

    let orderApiPayload = {};
    function placeOrder(){

        orderApiPayload = {user_id: USER_ID, store_id: STORE_ID, orders: selectedItemsList}

        sendOrderData(orderApiPayload)
        .then((data)=>{    processSendOrderDataResponse(data)  })
        .catch((err)=>{    processGetError(err)        });

    }

    function processSendOrderDataResponse(data){


        if(data.status == 'success'){

            dispatch(cartGetters.getAction_resetCartState());
            console.log("Successfully placed order.");
        }
        else{
            console.log("failed to post");
        }


    }




    useEffect(()=>{ 

        setupRazorpay();


    },[])

    return{} 

}





