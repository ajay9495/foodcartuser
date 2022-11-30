import React from 'react'
import Col from '../../BaseComponents/Col/Col'
import Section from '../../BaseComponents/Section/Section'
import Row from '../../BaseComponents/Row/Row'
import { Typography } from '@mui/material'

import './CartTotal.css'

export default function CartTotal({data}) {


  return (
    
    <Col classList={'ct-total-wrapper mt-2 p-3'} >
        <Section id="total">
        <Section id="mrp">
            <Row classList={'ct-total-sub py-3 px-2'}>
            <Col classList={'bo c-expand'}>
                <Typography color={'#457848'}  fontSize={'1rem'} >
                {"Total MRP "}
                </Typography>
            </Col>
            <Col classList={'bo c-collapse'}>
                <Typography color={'#457848'}  fontSize={'1rem'} >
                {data.totalMrp}
                </Typography>
            </Col>
            </Row>
        </Section>
        <Section id="savings">
            <Row  classList={'ct-total-sub py-3 px-2'}>
            <Col classList={'bo c-expand'}>
                <Typography color={'#457848'}  fontSize={'1rem'} >
                {"Your Savings "}
                </Typography>
            </Col>
            <Col classList={'bo c-collapse'}>
                <Typography color={'#457848'}  fontSize={'1rem'} >
                {data.totalSavings}
                </Typography>
            </Col>
            </Row>
        </Section>
        <Section id="total">
            <Row  classList={' py-3 px-2'}>
            <Col classList={'bo c-expand'}>
                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1.5rem'} >
                {"Total "}
                </Typography>
            </Col>
            <Col classList={'bo c-collapse'}>
                <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1.5rem'} >
                {data.totalPrice}
                </Typography>
            </Col>
            </Row>
        </Section>
        </Section>
    </Col>

  )
}
