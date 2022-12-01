
import ListItem from './ListItem/ListItem'
import "./ProductList.css"
import React, { useState } from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Col from '../BaseComponents/Col/Col'
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'



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
