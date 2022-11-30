import './ListItem.css'

import React, { useState,useContext, useEffect} from 'react'
import Wrapper from '../../BaseComponents/Wrapper/Wrapper'
import Grid from '../../BaseComponents/Grid/Grid'
import GridItem from '../../BaseComponents/GridItem/GridItem'
import Row from '../../BaseComponents/Row/Row'
import Col from '../../BaseComponents/Col/Col'
import Section from '../../BaseComponents/Section/Section'
import Header from '../Header/Main/Header'
import HeaderOffset from '../Header/HeaderOffset/HeaderOffset'
import SharedContext from '../../../SharedContext/SharedContext'

import { Typography,Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

import Offer from '../Offer/Offer'
import Counter from './Counter/Counter'

export default function ListItem({item}) {


    // const {appState,setAppState} = useContext(SharedContext);
    // let navigateTo = useNavigate();

    // let initialState = {
    //     isButtonVisible : true,
    //     quantity:1,
    //     unitPrice: item.offers[0].unitPrice,
    //     basePrice: (item.offers[0].unitPrice * item.offers[0].quantity),
    //     mrp: item.offers[0].mrp,
    //     offers:item.offers
    // }

    // const [state,setState] = useState(initialState);



    // function goTo(path){


    //     if(!isValueChanged){

    //         let homeWrapperDiv = document.getElementById('HomeWrapper');
    //         let mainWrapperDiv = document.getElementById('mainWrapper');
    //         let subscriptionWrapperDiv  = document.getElementById('subscriptionWrapper');
    //         navigateTo(path);

    //     }

    //     toggleValueChanged();

    // }

    // let isValueChanged  = false;
    // function toggleValueChanged(){

    // isValueChanged = !isValueChanged;
    // // console.log(isValueChanged);

    // }

    // function selectComboOffer(){

    // toggleValueChanged();


    // }



    // function addProduct(){

    //     toggleValueChanged();
    //     setState(v=> {
    //         return(
    //             {...v, isButtonVisible:false}
    //         )
    //     })

    //     addItemToCart();

    // }

    // function incrementQuantity(){

    //     toggleValueChanged();

    //     if (state.quantity < 100) {

    //         setState(v=>{
    //             return(
    //                 {...v, quantity: v.quantity + 1}
    //             )
    //         });

    //         incrementCart();

    //     }

    // }

    // function decrementQuantity(){

    //     toggleValueChanged();

    //     if (state.quantity > 1) {

    //         setState(v=>{
    //             return(
    //                 {...v, quantity: v.quantity - 1}
    //             )
    //         })

    //         decrementCart();
        
    //     }
    //     else if (state.quantity == 1) {

    //         setState(v=>{
    //             return(
    //                 {...v, isButtonVisible:true}
    //             )
    //         })

    //         decrementCart();
    //     }


    // }

    // let so_quantity = 1;
    // let so_unitPrice = 1;
    // let so_mrp = 1; 
    // let so_newOffers = [];
    // let so_discount = 1;

    // function selectOffer(index){
    //     so_unitPrice = state.offers[index].unitPrice;
    //     so_quantity = state.offers[index].quantity;
    //     so_mrp = state.offers[index].mrp;

    //     so_newOffers  = state.offers.map((item,arrayIndex)=>{
    //         if(arrayIndex == index){
    //             return {...item, isActive: "active"};
    //         }
    //         else{
    //             return {...item, isActive: "inactive"};
    //         }
    //     })

        
    //     updateBasePrice(so_quantity,so_unitPrice);
    //     updateOffer(so_newOffers);
    //     updateUnitPrice(so_unitPrice);
    //     updateMRP(so_mrp);
    // }

    // function updateMRP(newMRP){
    //     setState(v => {
    //         return(
    //             {...v,mrp: newMRP}
    //         )
    //     });
    // }

    // function updateBasePrice(quantity,unitPrice){
    //     setState(v => {
    //         return(
    //             {...v,basePrice: quantity*unitPrice}
    //         )
    //     });
    // }

    // function updateOffer(newOffers){
    //     setState(v=>{
    //         return(  {...v, offers : newOffers}  )
    //     })
    // }

    // function updateUnitPrice(newUnitPrice){
    //     setState(v=>{
    //         return(  {...v, unitPrice : newUnitPrice}  )
    //     })
    // }

    // let ic_productID = '';
    // let ic_newCartItemList = [];
    // function incrementCart(){

    //     setAppState(prevAppState=>{

    //         ic_productID = item.id;
    //         ic_newCartItemList = prevAppState.cart.itemList.map((cartItem,index)=>{
                
    //             if(cartItem.id == ic_productID){

    //                 return({...cartItem, quantity: cartItem.quantity + 1  })
    //             }
    //             else{

    //                 return({...cartItem})
    //             }
    //         })

    //         return(
    //             {
    //                 ...prevAppState,
    //                 cart:{  
    //                     ...prevAppState.cart,
    //                     itemList: ic_newCartItemList
    //                 }
    //             }
    //         )
    //     })
    // }

    // let dc_productID = '';
    // let dc_newCartItemList = [];
    // function decrementCart(){

    //     setAppState(prevAppState => {

    //         dc_productID = item.id;
    //         dc_newCartItemList = prevAppState.cart.itemList
    //                                 .filter((cartItem)=>{

    //                                     return !((cartItem.id == dc_productID) && (cartItem.quantity == 1)) 
    //                                 })
    //                                 .map((cartItem,index)=>{

    //                                     if(cartItem.id == dc_productID){

    //                                         return({...cartItem, quantity: cartItem.quantity - 1  });
    //                                     }
    //                                     else{
    //                                         return({...cartItem})
    //                                     }
    //                                 });

    //         return({
    //             ...prevAppState,
    //             cart:{
    //                 ...prevAppState.cart,
    //                 itemList: dc_newCartItemList
    //             }
    //         })
    //     })

    // }

    // let aitc_arr1 = [];
    // let aitc_arr2 = [];
    // let aitc_newItemList = [];

    // function addItemToCart(){


    //     setAppState(prevAppState =>{

    //         aitc_arr1 = prevAppState.cart.itemList;
    //         aitc_arr2 = [{...item, quantity: state.quantity, unitPrice: state.unitPrice, mrp: state.mrp  }];
    //         aitc_newItemList = aitc_arr1.concat(aitc_arr2);

    //         return({
    //             ...prevAppState,
    //             cart:{  
    //                 ...prevAppState.cart,
    //                 itemList: aitc_newItemList
    //             }
    //         })
    //     });


    // }





    return (


        <Row classList={'pl-sub'}  onClick={event => goTo('../../Product') }   >
            <Col classList={'c-collapse pl-item-left'}>
            <div className="pl-img-wrapper">
                {/* <img src={item.img} className={'pl-img'} /> */}
            </div>
            </Col>
            <Col classList={'px-3 pt-3 gy-3 c-expand pl-overflow-hidden'}>
                <Section id='title' classList={'bo '} >
                    <Row classList={'bo '}>
                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1rem'} >
                        {/* {item.name}  */}
                    </Typography>
                    </Row>
                </Section>
                <Section id='offer' classList={'bo '}  >
                    <Col classList={'bo gy-1'} onClick={event => selectComboOffer()} >
                    <Row classList={'bo'}>
                        <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.7rem'} >
                        Combo offers
                        </Typography>                            
                    </Row>
                    {/* <Row classList={'bo gx-2 pl-unit-price-wrapper'}>
                        {
                            state.offers.map((item,index)=> <Offer arrIndex={index} key={index} clickFun={selectOffer} data={item}  />)
                        }
                    </Row> */}
                    </Col>
                </Section>
                <Section id='price' classList={'bo '}>
                    <Row classList={'bo pl-2  gx-2'}>
                    <Col classList={'bo '}>
                        <Row classList={'bo '}>
                            <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1.3rem'} >
                                {"Rs "+state.basePrice*state.quantity}
                            </Typography>  
                        </Row>
                    </Col>
                    <Col classList={'bo px-2 c-y-center'}>
                        <div className="bo px-2 py-1 pl-discount">
                        <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.6rem'} >
                            {parseInt(((state.mrp - state.unitPrice)/state.mrp)*100)} % off
                        </Typography>                                 
                        </div>
                    </Col>
                    </Row>
                </Section>
                <Section id='add' classList={'bo '}>

                    {state.isButtonVisible ? 
                        <Button onClick={event =>{ addProduct() }} variant={'contained'} color={'success'} size={'small'} >
                            add
                        </Button>
                        : 
                        <Counter 
                            value={state.quantity} 
                            action={
                                {
                                    increment:incrementQuantity,
                                    decrement:decrementQuantity
                                }
                            }
                        />
                    }

                </Section>
            </Col>
        </Row>

    )

}

