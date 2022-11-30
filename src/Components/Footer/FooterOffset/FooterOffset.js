import React from 'react'

import './FooterOffset.css'
import ClickerBase from '../../ClickerBase/Standard/ClickerBase'
import { Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";

import HomeIcon from'@mui/icons-material/HomeOutlined'
import ShortsIcon from'@mui/icons-material/OndemandVideoOutlined'
import SubscriptionIcon from'@mui/icons-material/SubscriptionsOutlined'
import LibraryIcon from'@mui/icons-material/VideoLibraryOutlined'



export default function FooterOffset() {



  return (
    <div className="footerOffset-wrapper" >
      <ClickerBase>
        <div className="footerOffset-sub"  >
          <HomeIcon sx={{color:'#fff', fontSize:'25px'}} />
          <Typography color='#fff' fontSize='10px'> Home </Typography>
        </div>
      </ClickerBase>
      <ClickerBase>
        <div className="footerOffset-sub" >
          <ShortsIcon sx={{color:'#fff', fontSize:'25px'}} />
          <Typography color='#fff' fontSize='10px'> Shorts </Typography>
        </div>
      </ClickerBase>
      <ClickerBase>
        <div className="footerOffset-sub"  >
          <SubscriptionIcon sx={{color:'#fff', fontSize:'25px'}} />
          <Typography color='#fff' fontSize='10px'> Subscriptions </Typography>
        </div>
      </ClickerBase>
      <ClickerBase>
        <div className="footerOffset-sub"  >
          <LibraryIcon sx={{color:'#fff', fontSize:'25px'}} />
          <Typography color='#fff' fontSize='10px'> Library </Typography>
        </div>
      </ClickerBase>
    </div>
  )
}
