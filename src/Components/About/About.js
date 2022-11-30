import React from 'react'

import Header from './Header/Main/Header'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import { Typography } from '@mui/material'

export default function About() {
  return (

    <Wrapper>
        <Header />
        <HeaderOffset />

        <Row classList={'p-3'}>
            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:500,marginLeft:'10px'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia, nisi. Veniam neque id, debitis adipisci dicta 
                laboriosam quos earum! Porro sed quaerat vel dolorum 
                laboriosam voluptates officia! Id ut accusamus ipsum 
                saepe eligendi tenetur soluta obcaecati, 
                exercitationem aut debitis corrupti eaque molestias 
                tempora cumque esse maxime quasi voluptates sapiente 
                consequatur. Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Veniam praesentium explicabo consectetur sequi 
                quaerat esse labore reprehenderit quasi laudantium? 
                Ducimus sit similique praesentium ad aut omnis totam 
                quis, eveniet molestias in eaque ipsam veritatis 
                dignissimos quae atque assumenda rem tempore nostrum 
                placeat? Nostrum a assumenda dolores delectus. Animi, 
                atque aspernatur.
            </Typography>
        </Row>

    </Wrapper>



  )
}
