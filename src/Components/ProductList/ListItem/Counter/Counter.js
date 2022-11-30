import React from 'react'

import Row from '../../../BaseComponents/Row/Row'
import Col from '../../../BaseComponents/Col/Col'
import { Typography,Button } from '@mui/material'

export default function Counter({data, change}) {
  return (

    <Row classList={'bo'}>
        <Col classList={'bo'}>
            <Button onClick={(e)=>{ change.decrementQuantity(data) }}
                variant={'outlined'} color={'success'} size={'small'} >
                -
            </Button>
        </Col>
        <Col classList={'bo px-2 py-1'}>
            {data.quantity}
        </Col>
        <Col classList={'bo'}>
            <Button  onClick={(e)=>{ change.incrementQuantity(data) }}
                variant={'outlined'} color={'success'} size={'small'} >
                +
            </Button>
        </Col>
    </Row>

  )
}
