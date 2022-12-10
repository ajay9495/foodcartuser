import React from 'react'
import Wrapper from '../../BaseComponents/Wrapper/Wrapper';
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import { Typography } from '@mui/material';
import './CartItem.css'

export default function CartItem({data,change,config}){


  return (

    <Wrapper classList={'bo ci-wrapper'}>
      <Row classList={'bo '}>

        <Col classList={'bo p-2 c-collapse ci-item-left'}>
          <div className="ci-img-wrapper">
            <img src={config.CURRENT_PRODUCT_IMAGE_BASE+data.image_url} className={'ci-img'} />
          </div>
        </Col>

        <Col classList={'bo p-2 c-expand'}>
          <Row classList={'bo'}>
            <Typography color={'#457848'} fontWeight={'bold'} fontSize={'1rem'} >
              {data.name}
            </Typography>
          </Row>
          <Row classList={'bo'}>
            <Typography color={'#457848'}  fontSize={'0.8rem'} >
              {"Quantity "+data.quantity}
            </Typography>
          </Row>
          <Row classList={'bo'}>
            <Typography color={'#457848'} fontWeight={'bold'} fontSize={'1.3rem'} >
              {"Rs "+(data.quantity*data.selling_price)}
            </Typography>
          </Row>
        </Col>

      </Row>
    </Wrapper>

  )
}
