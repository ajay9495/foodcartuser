import React from 'react' 
 
import Header from './Header/Main/Header'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import { Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import TickIcon from '@mui/icons-material/TaskAlt';
import useAddressLogic from './useAddressLogic'
import useSharedConfig from '../../SharedModules/SharedConfig/SharedConfig'

import './Address.css'

export default function Address() {

    const {navigateTo, change, state, addressState, addressIsSet} = useAddressLogic();
    const {config} = useSharedConfig();

  return (

    <Wrapper classList={'bo ad-main-wrapper'}>
        <Header />
        <HeaderOffset />

        {

            (addressIsSet == "notSet")?
                <Col classList={'px-3 py-4 g-4'} > 
                    <Col classList={'g-1'}>
                        <TextField
                            label="Address"
                            variant="outlined"
                            multiline
                            rows={10}
                            sx={{width:'100%'}}
                            onChange={(e)=>{ change.addressChange(e) }}
                            value={addressState.data[0].value}
                        />
                        <Typography sx={{fontSize:'0.75rem', color:'red'}}> {addressState.data[0].error} </Typography>
                    </Col>

                    <Col classList={'g-1'}>
                        <TextField
                            label="Landmark / Direction (optional)"
                            variant="outlined"
                            multiline
                            rows={1}
                            sx={{width:'100%'}}
                            onChange={(e)=>{ change.landmarkChange(e) }}
                            value={addressState.data[1].value}
                        />    
                        <Typography sx={{fontSize:'0.75rem', color:'red'}}> {addressState.data[1].error} </Typography>                     
                    </Col>
  
                    <Col  classList={'g-1'}>
                        <Button 
                            color='primary' 
                            variant="contained"
                            sx={{width:'fit-content'}} 
                            onClick={(e)=>{ change.goToMap() }}
                        >
                            Set Location
                        </Button>     
                        <Typography sx={{fontSize:'0.75rem', color:'red'}}>  {addressState.data[2].error} </Typography>                    
                    </Col>

                    <Col>
                        <Button 
                            color='primary' 
                            variant="contained"
                            sx={{width:'100%',padding:'1rem'}} 
                           onClick={(e)=>{ change.validate(e) }} 
                        >
                            Submit
                        </Button>
                    </Col>
                </Col>
            :(addressIsSet == "set")?

                <div className='ad-content-wrapper'>
                    <div className='bo '>
                        <HeaderOffset />

                        <Col classList={'bo p-3'}>
                            <Row classList={'bo p-3'}>
                                <Col>
                                    <Row classList={'py-3'}>
                                        <Typography sx={{color:'#457848', fontSize:'1.5rem', fontWeight:1000,marginLeft:'10px'}} >
                                            Address
                                        </Typography>                            
                                    </Row>
                                    <Row>
                                        <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:100,marginLeft:'10px'}} >
                                            {addressState.data[0].value}
                                        </Typography>  
                                    </Row>
                                </Col>
                            </Row>
                            <Row classList={'bo r-y-center g-3 p-3'}>
                                <Typography sx={{color:'#457848', fontSize:'1.5rem', fontWeight:1000,marginLeft:'10px'}} >
                                    Location
                                </Typography>   
                                <TickIcon sx={{fontSize:'1rem'}} />
                            </Row>
                        </Col>

                    </div>
                    <div className='bo p-3'>
                        <Button 
                            fullWidth 
                            disableElevation 
                            sx={{padding:'1rem'}}
                            variant='contained' 
                            color='success'
                            onClick={(e)=>{ navigateTo(config.ROOT_PATH+'/Payment') }} 
                        >
                            Next
                        </Button>                    
                    </div>
                </div>
            :
                <div></div>
        }




    </Wrapper>

  )
}
