import React,{ useState} from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Grid from '../BaseComponents/Grid/Grid'
import GridItem from '../BaseComponents/GridItem/GridItem'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Section from '../BaseComponents/Section/Section'
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import { Typography, Button } from '@mui/material'
import rice from '../../../src/Image/rice.png'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import "./Product.css"
import Offer from './Offer/Offer'

export default function Product() {

    const [open,setOpen] =  useState(false);
    function openDialogue(){
        setOpen(true);
    }

    function closeDialogue(){
        setOpen(false);
    }
    


  return (
    <Wrapper classList={'bo p-main-wrapper'} >

            <Col classList={'bo p-scroller'}>
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

                <Row classList={'bo py-5 r-x-center p-image-wrapper'}>
                    <img src={rice} className={'p-image'} />
                </Row>
                <Row>
                    <Col classList={'px-3 pt-4 pb-5 gy-4 c-expand pl-overflow-hidden'}>
                        <Section id='title' classList={'bo '} >
                            <Row classList={'bo '}>
                                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1.5rem'} >
                                    Rice, Surekha
                                </Typography>
                            </Row>
                        </Section>
                        <Section id='offer' classList={'bo '}  >
                            <Col classList={'bo gy-1'}>
                                <Row classList={'bo'}>
                                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.7rem'} >
                                    Combo offers
                                    </Typography>                            
                                </Row>
                                <Row classList={'bo gx-2 pl-unit-price-wrapper'}>
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                </Row>
                            </Col>
                        </Section>
                        <Section id='price' classList={'bo '}>
                            <Row classList={'bo pl-2  gx-2'}>
                            <Col classList={'bo '}>
                                <Row classList={'bo '}>
                                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1.5rem'} >
                                        Rs 155
                                    </Typography>  
                                </Row>
                                <Row classList={'bo r-x-center'}>
                                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1rem'} >
                                        Rs 250
                                    </Typography> 
                                </Row>
                            </Col>
                            <Col classList={'bo px-2 c-y-center'}>
                                <div className="bo px-2 py-1 pl-discount">
                                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.7rem'} >
                                    23% off
                                </Typography>                                 
                                </div>
                            </Col>
                            </Row>
                        </Section>
                        <Section id='Add' classList={'bo'}>
                            <Button variant='contained' color='success' onClick={openDialogue}>
                                add
                            </Button>
                        </Section>
                        <Section id='description' classList={'bo '}>
                            <Typography  color={'#457848'} fontSize={'0.8rem'} >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam reprehenderit fuga similique provident a dolorum cumque, quasi odit inventore deleniti.
                            </Typography>
                        </Section>
                    </Col>
                </Row>
                
            </Col> 

    </Wrapper>
  )
}
