import ListItem from './ListItem/ListItem'
import "./Orders.css"
import React, { useState } from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import useOrdersLogic from './OrderLogic'
 
export default function Orders() {

  const {state,change,config} = useOrdersLogic();

  return (

    <Wrapper classList={'o-main-wrapper'}>
        <Header />
        <HeaderOffset />

        <Col classList={'p-2 gy-2 '}>
          {
            state.data.map((item,index)=>{
              return(
                <ListItem config={config} item={item} change={change} key={index} />
              )
            })
          }
        </Col>
    </Wrapper>

  )
}
