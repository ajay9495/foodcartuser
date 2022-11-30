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
import CartTotal from './CartTotal/CartTotal'
import {Button} from '@mui/material'
import './Cart.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useCartLogic from './useCartLogic';

export default function Cart() {

  const [open,setOpen] =  useState(false);
  const {selectedItemsList, totalData, navigateTo} = useCartLogic();



  function openDialogue(){
    setOpen(true);
  }

  function closeDialogue(){
    setOpen(false);
  }


  return (
    <Wrapper>

      <Header />
      <HeaderOffset />
      
        <Dialog
          open={open}
          onClose={closeDialogue}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"App under development"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please note that this app is under development 
              and some of the features are turned off.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              variant='contained'
              color='success'
              autoFocus
              onClick={closeDialogue}
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>

      <div className={'ca-main-wrapper'}>

        <div className={'px-2 ca-content-wrapper'}>
          <Section id="content" >
            <HeaderOffset />
            {(selectedItemsList.length > 0) ?
              <CartTotal data={totalData} /> : 
              <Row classList={'p-4 r-x-center'}>
                <Typography color={'secondary'}> 
                  Cart is Empty !
                </Typography>
              </Row>
            }

            <Col classList={'bo mt-3 gy-2'}>
              {
                selectedItemsList.map((item,index)=>{
                  return(
                    <CartItem key={index} data={item} />
                  );
                })
              }
            </Col>
          </Section>
        </div>

        <Section id="payment" classList={'p-3'}>
              
          {(selectedItemsList.length > 0) &&

            <Button 
              fullWidth 
              disableElevation 
              sx={{padding:'1rem'}}
              variant='contained' 
              color='success' 
              onClick={(e)=>{ navigateTo('/Address') }}
              >
                Next
            </Button>
          }
        </Section>

      </div>
    </Wrapper>


  )
}
