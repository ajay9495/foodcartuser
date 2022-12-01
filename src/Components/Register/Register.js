import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Grid from '../BaseComponents/Grid/Grid'
import GridItem from '../BaseComponents/GridItem/GridItem'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Section from '../BaseComponents/Section/Section'
import { Typography,Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import useRegisterLogic from './useRegisterLogic'
import './Register.css'

export default function Register() {

    const {state,change} = useRegisterLogic();

  return (
    
    <Wrapper classList={'bo re-wrapper'}>
        
        <Row classList={'bo re-wrapper r-x-center r-y-center'}>
            
            <Col classList={'bo p-3 c-x-center re-content'}>
                <Col classList={'bo p-3 re-sub'}>
                    <TextField onChange={(e)=>{ change.nameChange(e) }} label="Full Name" variant="outlined" />
                    <Typography sx={{fontSize:'0.75rem', color:'red'}}> {state[2].error} </Typography>
                </Col>
                <Col classList={'bo p-3 re-sub'}> 
                    <TextField onChange={(e)=>{ change.phoneNumberChange(e) }} label="Phone Number" variant="outlined" />
                    <Typography sx={{fontSize:'0.75rem', color:'red'}}> {state[0].error} </Typography>
                </Col>
                <Col classList={'bo p-3 re-sub'}>
                    <TextField onChange={(e)=>{ change.passwordChange(e) }} label="Password" variant="outlined" />
                    <Typography sx={{fontSize:'0.75rem', color:'red'}}> {state[1].error} </Typography>
                </Col>               
                <Col classList={'bo p-3 re-sub'}>
                    <Button onClick={(e)=>{ change.validate() }} sx={{padding:'1rem'}} color={'success'} variant='contained' >
                        Register
                    </Button>
                </Col>
                <Row classList={'bo p-3 re-sub'}>
                    <Typography
                        sx={{fontSize:'0.75rem',padding:'0.5rem' }}
                    >
                        Already have an account ? 
                    </Typography>
                    <Typography
                        sx={{fontSize:'1rem' ,padding:'0.25rem', color:'#457848'}}  
                        onClick={()=>{ change.goToLogin() }}      
                    >
                        Login
                    </Typography>
                </Row>

            </Col>


        </Row> 

    </Wrapper>


  )
}
