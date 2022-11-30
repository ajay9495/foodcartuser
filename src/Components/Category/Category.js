import React from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Grid from '../BaseComponents/Grid/Grid'
import GridItem from '../BaseComponents/GridItem/GridItem'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import { Typography } from '@mui/material'

import useCategoryLogic from './useCategoryLogic'
import './Category.css'

export default function Category(){

    const {state, navigateTo,config} = useCategoryLogic();

    return (
        <Wrapper classList={' c-main-wrapper'}>

            <Header />
            <HeaderOffset />

            <Grid classList={'g-3 p-3'}>
            {
                state.data.map((item,index)=>{
                    return(
                        <GridItem  classList={'g-s-6 g-collapse-y'}   onClick={event => navigateTo('ProductList',  {state:{category_id: item.id }}  ) }  key={index}>
                            <Col classList='c-sub'>
                                <Row >
                                    <div className='c-image-wrapper'>
                                        <img className='c-image'  src={config.CURRENT_CATEGORY_IMAGE_BASE+item.image_url} />
                                    </div>
                                </Row>
                                <Row classList={'r-x-center p-3 c-text'}>
                                    <Typography color={'#457848'} fontWeight={'bold'} fontSize={'0.8rem'}>
                                        {item.name} 
                                    </Typography> 
                                </Row>
                            </Col>
                        </GridItem>
                    )
                })
            }
            </Grid>
        </Wrapper>
    )
}