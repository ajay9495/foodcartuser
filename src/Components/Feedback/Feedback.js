import React from 'react'

import Header from './Header/Main/Header'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import { Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';

import useFeedbackLogic from './FeedbackLogic'
import Dialogue from './Dialogue/Dialogue'

export default function Feedback() {

    const {change, dialogueState} = useFeedbackLogic();

  return (

    <Wrapper>
        <Header />
        <HeaderOffset />

        <Dialogue change={change} dialogueState={dialogueState} />

        <Col classList={'px-3 py-4 g-3'} >
            <TextField
                label="Feedback"
                variant="outlined"
                multiline
                rows={10}
                sx={{width:'100%'}}
                onChange={(e)=>{ change.feedbackChange(e) }}
            />
            <Button 
                color='primary' 
                variant="contained"
                sx={{width:'100%',padding:'1rem'}} 
                onClick={(e)=>{ change.validate(e) }}
            >
                Submit
            </Button>
        </Col>


    </Wrapper>



  )
}
