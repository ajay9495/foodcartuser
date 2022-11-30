import React,{useContext, useState} from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Col from '../BaseComponents/Col/Col'
import Row from '../BaseComponents/Row/Row'
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import CartItem from './CartItem/CartItem'
import SharedContext from '../../SharedContext/SharedContext'
import { Typography } from '@mui/material'
import Section from '../BaseComponents/Section/Section'
import {Button} from '@mui/material'
import './OrderDetails.css'
 
import { useOrderDetailsLogic } from './useOrderDetailsLogic'


export default function OrderDetails() {

    const {state} =useOrderDetailsLogic();
    
    return (

        <Wrapper classList={'od-main-wrapper'}>

            <Header />
            <HeaderOffset />

            <Col classList={'bo m-2 gy-2'}>
                {
                    state.data.map((item,index)=>{
                        return <CartItem data={item}  key={index} />
                    })
                }
            </Col>

        </Wrapper>

    )



}
