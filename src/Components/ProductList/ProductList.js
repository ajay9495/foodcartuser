
import ListItem from './ListItem/ListItem'
import "./ProductList.css"
import React, { useState } from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Grid from '../BaseComponents/Grid/Grid'
import GridItem from '../BaseComponents/GridItem/GridItem'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Section from '../BaseComponents/Section/Section'
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'

import horlix from '../../../src/Image/horlix.png'
import veg from '../../../src/Image/veg.png'
import biscuit from '../../../src/Image/biscuit.png'
import bread from '../../../src/Image/bread.png'
import rice from '../../../src/Image/rice.png'
import oil from '../../../src/Image/oil.png'
import tea from '../../../src/Image/tea.png'
import powder from '../../../src/Image/powder.png'

import useProductListLogic from './useProductListLogic';

export default function ProductList() {

  const {state, cartState, change, config} =  useProductListLogic();

 

  return (
    
    <Wrapper classList={'pl-main-wrapper'} >
        <Header />
        <HeaderOffset />
        <Col classList={'p-2 gy-2'}>
          {
            state.data.map((item,index)=>{
              return(
                  <ListItem config={config} change={change} item={item} key={index} />
              )                
            })
          }
        </Col>
    </Wrapper>

  )
}
