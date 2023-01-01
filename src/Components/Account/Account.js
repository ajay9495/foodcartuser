import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from './Header/Main/Header'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import ClickerBase from '../BaseComponents/ClickerBase/Standard/ClickerBase'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import { Typography } from '@mui/material'
import Orders from '@mui/icons-material/ShoppingCartOutlined';
import Info from '@mui/icons-material/InfoOutlined';
import Logout from '@mui/icons-material/LogoutOutlined';
import UserIcon from '@mui/icons-material/Person';
import FeedbackIcon from '@mui/icons-material/CommentOutlined';
import useAccountLogic from './useAccountLogic'
import './Account.css'
import useSharedConfig from '../../SharedModules/SharedConfig/SharedConfig'

export default function Account() {

  const navigateTo = useNavigate();
  const {logoutUser,state} = useAccountLogic();
  const {config} = useSharedConfig();

  return (

    <Wrapper>
      <Header />
      <HeaderOffset />
        <Col classList={'px-2 py-3 r-x-center'}>

          <Row classList={'a-user-details-wrapper r-x-center r-y-center'}>
            
              <Col classList={'c-collapse c-x-center'}>
                <div className='a-image-wrapper'>
                  <UserIcon   sx={{fontSize:'4rem', color:'#fff'}} />
                </div>
                <Typography  color={'#457848'} fontSize={'2rem'} fontWeight={'bold'} >{state.user_name}</Typography>
              </Col>
            
          </Row>
            
          <ClickerBase>
            <Row classList={'px-4 py-3 g-2'} onClick={(e)=>{ navigateTo(config.ROOT_PATH+'/Orders') }}  >
              
                  <Col classList={'c-collapse'}>
                    <Orders  sx={{fontSize:'1.5rem', color:'#457848'}} />
                  </Col>
                  <Col classList={'px-3'}>
                    <Typography color={'#457848'} fontSize={'1rem'} fontWeight={'bold'} >
                      Your Orders
                    </Typography>
                  </Col>
              
            </Row>
          </ClickerBase>

          <ClickerBase>
            <Row classList={'px-4 py-3 g-2'} onClick={(e)=>{ navigateTo(config.ROOT_PATH+'/About') }}>
                <Col classList={'c-collapse'}>
                  <Info  sx={{fontSize:'1.5rem', color:'#457848'}}  />
                </Col>
                <Col classList={'px-3'}>
                  <Typography  color={'#457848'}  fontSize={'1rem'} fontWeight={'bold'}>
                    About
                  </Typography>
                </Col>
            </Row>
          </ClickerBase>

          <ClickerBase>
            <Row classList={'px-4 py-3 g-2'} onClick={(e)=>{ navigateTo(config.ROOT_PATH+'/Feedback') }}>
                <Col classList={'c-collapse'}>
                  <FeedbackIcon  sx={{fontSize:'1.5rem', color:'#457848'}}  />
                </Col>
                <Col classList={'px-3'}>
                  <Typography  color={'#457848'}  fontSize={'1rem'} fontWeight={'bold'}>
                    Send Feedback
                  </Typography>
                </Col>
            </Row>
          </ClickerBase>

          <ClickerBase>
            <Row classList={'px-4 py-3 g-2'} onClick={(e)=>{ logoutUser() }} >
                <Col classList={'c-collapse'}>
                  <Logout sx={{fontSize:'1.5rem', color:'#457848'}} />
                </Col>
                <Col classList={'px-3'}>
                  <Typography  color={'#457848'}  fontSize={'1rem'} fontWeight={'bold'}>
                    Logout
                  </Typography>
                </Col>
            </Row>
          </ClickerBase>



        </Col>
    </Wrapper>

  )
}
