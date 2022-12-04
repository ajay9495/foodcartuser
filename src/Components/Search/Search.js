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
import Counter from './Counter/Counter'

import { Typography,Button } from '@mui/material'

import Offer from './Offer/Offer'
import './Search.css'
import useSearchLogic from './useSearchLogic'

export default function Search() {

    const {searchState,change,config} = useSearchLogic();
    const IMAGE_BASE_URL = "http://192.168.43.187/projects/home-shope/storage/app/public/products/";

    
    function getDisplayPrice(item){
        return parseInt((item.current_selling_price.value.price * item.current_selling_price.value.quantity)  * item.quantity);
    }

    function getDiscount(item){
        return parseInt(((item.current_mrp.value.price - item.current_selling_price.value.price)/item.current_mrp.value.price)*100);
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
                (searchState.data.length > 0) ?
                    searchState.data.map((item,index)=>{
                    return(

                        <Row classList={'s-sub'}    key={item.id} >
                            <Col classList={'c-collapse s-item-left'}>
                                <div className="s-img-wrapper">
                                <img src={config.CURRENT_PRODUCT_IMAGE_BASE+item.image_url} className={'s-img'} />
                                </div>
                            </Col>
                            <Col classList={'px-3 pt-3 gy-4 c-expand s-item-right'}>

                                <Section id='title' classList={'bo '} >
                                    <Row classList={'bo '}>
                                        <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1rem'} >
                                        {item.name} 
                                        </Typography>
                                    </Row>
                                </Section>

                                <Section id='price' classList={'bo '}>
                                    <Row classList={'bo pl-2  gx-2'}>
                                        <Col classList={'bo '}>
                                            <Row classList={'bo '}>
                                                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1rem'} >
                                                    Rs {item.selling_price}
                                                </Typography>  
                                            </Row>
                                        </Col>
                                    <Col classList={'bo px-2 c-y-center'}>
                                        {(item.discount != 0)&&
                                            <div className="bo px-2 py-1 pl-discount">
                                                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.6rem'} >
                                                    {item.discount+" % off" }
                                                </Typography>                                 
                                            </div>
                                        }
                                    </Col>
                                    </Row>
                                </Section>

                                <Section id='add' classList={'bo '}>

                                    {item.is_selected ? 
                                        <Counter data={item}  change={change} />
                                        : 
                                        <Button  onClick={(e)=>{ change.additem(item) }} variant={'contained'} color={'success'} size={'small'} >
                                            add
                                        </Button>
                                    }

                                </Section>

                            </Col>
                        </Row>

                    )                
                    })
                :
                <Row classList={'p-4 r-x-center'}>
                    <Typography color={'secondary'}> {searchState.error}</Typography>
                </Row>
            }
        </Col>
    </Wrapper>


  )
}
