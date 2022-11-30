import React from 'react'
import Wrapper from '../../BaseComponents/Wrapper/Wrapper'
import Grid from '../../BaseComponents/Grid/Grid'
import GridItem from '../../BaseComponents/GridItem/GridItem'
import Row from '../../BaseComponents/Row/Row'
import Col from '../../BaseComponents/Col/Col'
import { Typography } from '@mui/material'

import './Offer.css'

export default function Offer({data,change,product}) {



  return (


        <Col onClick={(e)=>{ change.setOffer(data.item,product) }} classList={'bo gy-1 c-collapse'} >
            <Row classList={'bo r-x-center'}>
                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.7rem'} >
                    {data.item.value.quantity+' '+data.unit}
                </Typography>
            </Row>
            <Row classList={'bo '}>
                <div className={"px-3 py-1 pl-o-unit-price "+data.item.isActive}>
                    <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.7rem'} >
                        {data.item.value.price+' / '+data.unit}
                    </Typography>
                </div>
            </Row>
        </Col> 


  )
}
