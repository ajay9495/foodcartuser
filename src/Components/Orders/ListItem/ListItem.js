import './ListItem.css'

import React, { useState,useContext, useEffect} from 'react'
import Wrapper from '../../BaseComponents/Wrapper/Wrapper'
import Grid from '../../BaseComponents/Grid/Grid'
import GridItem from '../../BaseComponents/GridItem/GridItem'
import Row from '../../BaseComponents/Row/Row'
import Col from '../../BaseComponents/Col/Col'
import Section from '../../BaseComponents/Section/Section'
import Header from '../Header/Main/Header'
import HeaderOffset from '../Header/HeaderOffset/HeaderOffset'
import SharedContext from '../../../SharedContext/SharedContext'

import { Typography,Button } from '@mui/material'


export default function ListItem({item,change,config}) {

    

    return (

        <Row classList={'o-sub py-4 px-4'}  >
            
            <Col classList={'bo c-expand'}>
                
                <Row classList={'bo py-2 r-x-start'}>
                    <Col classList={'bo c-collapse  c-x-center'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                Order ID
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'.75rem', fontWeight:100,marginLeft:'10px'}} >
                                {config.ORDER_ID_MASK+item.order_id}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>

                <Row classList={'bo py-2 r-x-start'}>
                    <Col classList={'bo c-collapse  c-x-center'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                Status
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'.75rem', fontWeight:100,marginLeft:'10px'}} >
                                {item.status}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>

                <Row classList={'bo py-2 r-x-start'}>
                    <Col classList={'bo c-collapse  c-x-center'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                Date
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'.75rem', fontWeight:100,marginLeft:'10px'}} >
                                {item.date}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>

            </Col>
            <Col classList={'bo c-expand c-x-center '}>
                <Row classList={'bo r-x-center'}>
                    <Col classList={'bo c-collapse p-3 c-x-center'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:100,marginLeft:'10px'}} >
                                Price
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1.5rem', fontWeight:1000,marginLeft:'10px'}} >
                                Rs {item.price}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>
                <div className='bo pull-bottom'>
                    <Button onClick={(e)=>{ change.navigateTo(config.ROOT_PATH+'/OrderDetails',{state:{order_id: item.order_id }}) }} color='success' variant={'outlined'}>Details</Button>
                </div>
            </Col>
        </Row>

    )

}
