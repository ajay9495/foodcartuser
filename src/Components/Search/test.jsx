import {React, useState} from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Grid from '../BaseComponents/Grid/Grid'
import GridItem from '../BaseComponents/GridItem/GridItem'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Section from '../BaseComponents/Section/Section'
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import { InputBase } from '@mui/material'

import { Typography,Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

import Offer from './Offer/Offer'
import './Search.css'

import horlix from '../../../src/Image/horlix.png'
import veg from '../../../src/Image/veg.png'
import biscuit from '../../../src/Image/biscuit.png'
import bread from '../../../src/Image/bread.png'
import rice from '../../../src/Image/rice.png'
import oil from '../../../src/Image/oil.png'
import tea from '../../../src/Image/tea.png'
import powder from '../../../src/Image/powder.png'

import useSearchLogic from './useSearchLogic'

export default function Search() {

    const {resultState,state,change} = useSearchLogic();
    console.log(resultState);
    

    let navigateTo = useNavigate();

    function goTo(path){
        let homeWrapperDiv = document.getElementById('HomeWrapper');
        let mainWrapperDiv = document.getElementById('mainWrapper');
        let subscriptionWrapperDiv  = document.getElementById('subscriptionWrapper');
        navigateTo(path);
    }

    let productList = [
        {productName:"Biscuts",img:biscuit},
        {productName:"Bread",img:bread}
    ] 

    const [State,setState] = useState([]);



    function ShowResults(){
        setState(productList);
        console.log("hello change");
    }

  return (

    <Wrapper classList={'s-main-wrapper'} >
        <Header />
        <HeaderOffset />
        <Row classList={'bo py-2 r-x-center s-search-bar-wrapper'}>
            <div className={'b  s-input-wrapper'}>
                <InputBase onChange={e => change.keywordChange(e) } fullWidth={true} placeholder=' Search' sx={{paddingLeft:'1rem',width:'20rem',height:'3rem', backgroundColor:'#0001', borderRadius: '1.5rem' }} />
            </div>
        </Row>
        <Row classList={'bo p-2 s-input-offset'}>
            <div className={'bo  '}>
                <InputBase onChange={(e)=>{ change.submit(e) }} fullWidth={true} placeholder=' Search' sx={{height:'3rem', backgroundColor:'#0001' }} />
            </div>
        </Row>

        <Col classList={'px-2 py-3 gy-2'}>
            {
                resultState.map((item,index)=>{
                return(

                    <Row classList={'s-sub'}  onClick={event => goTo('../Product') }  key={index} >
                        <Col classList={'c-collapse s-item-left'}>
                            <div className="s-img-wrapper">
                            <img src={item.img} className={'s-img'} />
                            </div>
                        </Col>
                        <Col classList={'px-3 pt-3 gy-3 c-expand s-overflow-hidden'}>

                            <Section id='title' classList={'bo '} >
                            <Row classList={'bo '}>
                                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1rem'} >
                                {item.productName} 
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
                                <Row classList={'bo gx-2 s-unit-price-wrapper'}>
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                </Row>
                            </Col>
                            </Section>

                            <Section id='price' classList={'bo '}>
                            <Row classList={'bo s-2  gx-2'}>
                                <Col classList={'bo '}>
                                <Row classList={'bo '}>
                                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1.3rem'} >
                                    Rs 155
                                    </Typography>  
                                </Row>
                                {/* <Row classList={'bo r-x-center'}>
                                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.8rem'} >
                                    Rs 250
                                    </Typography> 
                                </Row> */}
                                </Col>
                                <Col classList={'bo px-2 c-y-center'}>
                                <div className="bo px-2 py-1 s-discount">
                                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.6rem'} >
                                    23% off
                                    </Typography>                                 
                                </div>
                                </Col>
                            </Row>
                            </Section>

                            <Section id='add' classList={'bo '}>
                            <Button variant={'contained'} color={'success'} size={'small'} >
                                add
                            </Button>
                            </Section>
                            
                        </Col>
                    </Row>

                )                
                })
            }
        </Col>
    </Wrapper>


  )
}
