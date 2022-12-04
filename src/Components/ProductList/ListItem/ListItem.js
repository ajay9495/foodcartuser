import React, { useState,useContext, useEffect} from 'react'
import { Typography,Button } from '@mui/material'

import Row from '../../BaseComponents/Row/Row'
import Col from '../../BaseComponents/Col/Col'
import Section from '../../BaseComponents/Section/Section'
import Offer from '../Offer/Offer'
import Counter from './Counter/Counter'
import './ListItem.css'


export default function ListItem({item,change,config}) {


    return (

        <Row classList={'pl-sub'}     >

            <Col classList={'c-collapse pl-item-left'}>
                <div className="pl-img-wrapper">
                    <img src={config.CURRENT_PRODUCT_IMAGE_BASE+item.image_url} className={'pl-img'} />
                </div>
            </Col>
            
            <Col classList={'px-3  gy-4 c-expand pl-item-right'}>

                <Section id='title' classList={'bo '} >
                    <Row classList={'bo '}>
                        <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1.3rem'} >
                            {item.name} 
                        </Typography>
                    </Row>
                </Section>

                <Section id='price' classList={'bo '}>
                    <Row classList={'bo pl-2  gx-2'}>
                    <Col classList={'bo '}>
                        <Row classList={'bo '}>
                            <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'1rem'} >
                                Rs {(item.selling_price*item.quantity)}
                            </Typography>  
                        </Row>
                    </Col>
                    <Col classList={'bo px-2 c-y-center'}>
                        <div className="bo px-2 py-1 pl-discount">
                        <Typography  color={'#457848'} fontWeight={'bold'} fontSize={'0.6rem'} >
                           {(item.discount != 0)? item.discount+" % off" : ""}
                        </Typography>                                 
                        </div>
                    </Col>
                    </Row>
                </Section>

                <Section id='add' classList={'bo '}>

                    {item.is_selected ? 
                        <Counter data={item}  change={change} />
                        : 
                        <Button  onClick={(e)=>{ change.addButtonChange(item) }}  variant={'contained'} color={'success'} size={'small'} >
                            add
                        </Button>
                    }

                </Section>


            </Col>
            
        </Row>

    )

}
