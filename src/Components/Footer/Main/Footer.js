import React, {useContext} from 'react'
import './Footer.css'
import ClickerBase from '../../BaseComponents/ClickerBase/Standard/ClickerBase'
import { Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";

import SharedContext from '../../../SharedContext/SharedContext';
import useSharedConfig from '../../../SharedModules/SharedConfig/SharedConfig';
import HomeIcon from'@mui/icons-material/HomeOutlined'
import Search from'@mui/icons-material/Search'
import Video from'@mui/icons-material/SmartDisplayOutlined'
import Heart from'@mui/icons-material/FavoriteBorderOutlined'
import Circle from '@mui/icons-material/AccountCircleOutlined';
import KartIcon from '@mui/icons-material/ShoppingCartOutlined';

import useFooterLogic from './useFooterLogic';  

export default function Footer() {


  const {appState,setAppState} = useContext(SharedContext);
  let navigateTo = useNavigate();

  const {totalQuantity}  = useFooterLogic();
  const {config} = useSharedConfig();



  function goTo(path){
    let homeWrapperDiv = document.getElementById('HomeWrapper');
    let mainWrapperDiv = document.getElementById('mainWrapper');
    let subscriptionWrapperDiv  = document.getElementById('subscriptionWrapper');
  
    navigateTo(path);
  }

  return (
    <div className="footer-wrapper" >
      <ClickerBase>
        <div className="footer-sub" onClick={event => goTo(config.ROOT_PATH)} >
          <HomeIcon sx={{color:'#457848;', fontSize:'30px'}} />
        </div>
      </ClickerBase>
      <ClickerBase>
        <div className="footer-sub" onClick={event => goTo(config.ROOT_PATH+"/Search")} >
          <Search sx={{color:'#457848;', fontSize:'30px'}} />
        </div>
      </ClickerBase>
      <ClickerBase>
        <div className="footer-sub" onClick={event => goTo(config.ROOT_PATH+"/Cart")} >
          {(totalQuantity > 0)&&
              <div className="footer-coin">
                <Typography fontWeight={'bold'} fontSize={'0.5rem'} sx={{color:'#fff'}}>
                  {totalQuantity}
                </Typography>
              </div>
          }
          <KartIcon sx={{color:'#457848;', fontSize:'30px'}}  />
        </div>
      </ClickerBase>
      <ClickerBase>
        <div className="footer-sub" onClick={event => goTo(config.ROOT_PATH+"/Account")} >
          <Circle sx={{color:'#457848;', fontSize:'30px'}} />
        </div>
      </ClickerBase>
    </div>
  )
}
