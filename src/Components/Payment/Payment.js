import React from 'react'

import Header from './Header/Main/Header'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import { Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import TickIcon from '@mui/icons-material/TaskAlt';

import usePaymentLogic from './usePaymentLogic'
import Dialogue from './Dialogue/Dialogue'

import './Payment.css'

export default function Payment() {

    const {placeOrder,change,dialogueState} = usePaymentLogic();

  return (

    <Wrapper classList={'bo pa-main-wrapper'}>
        <Header />
        <HeaderOffset />

        <Dialogue change={change} dialogueState={dialogueState} />

        <div className='ad-content-wrapper'>
            <div className='bo '>
                <HeaderOffset />

                <Col classList={'bo p-5'}>
                    <Row classList={'bo r-y-center g-3 p-3 pa-option-wrapper'}>
                        <TickIcon sx={{fontSize:'1rem'}} />
                        <Col classList={'bo '} >
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                Cash On Delevery
                            </Typography>                            
                        </Col>
                    </Row>
                </Col>

            </div>
            <div className='bo p-3'>
                <Button 
                    fullWidth 
                    disableElevation 
                    sx={{padding:'1rem'}}
                    variant='contained' 
                    color='success'
                    onClick={(e)=>{ placeOrder() }} 
                >
                    Place Order
                </Button>                    
            </div>
        </div>


    </Wrapper>


  )
}
