import React from 'react'
import './HeaderContent.css'
import InputBase from '@mui/material/InputBase'
import YoutubeIcon from '@mui/icons-material/YouTube'
import Search from '@mui/icons-material/SearchOutlined'
import { Typography } from '@mui/material'
import CameraIcon from '@mui/icons-material/CameraAltOutlined';
import AddIcon from '@mui/icons-material/AddOutlined';
import KartIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function HeaderContent(arg) {


  function callToggleOverlay(){
    arg.props.closeSearchResult()
    arg.props.toggleOverlay()
  }


  return (

        <div className="px-3 header-content-wrapper">
            <div className='gridSub'>   
              <KartIcon sx={{fontSize:30, color:'#457848'}}  />
              <Typography sx={{color:'#457848', fontSize:20, fontWeight:1000,marginLeft:'10px'}} >
                Sellory
              </Typography>
            </div>

        </div>

  )
}
