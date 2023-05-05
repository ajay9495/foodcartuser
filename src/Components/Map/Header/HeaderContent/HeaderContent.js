import React from 'react'
import './HeaderContent.css'
import InputBase from '@mui/material/InputBase'
import YoutubeIcon from '@mui/icons-material/YouTube'
import Search from '@mui/icons-material/SearchOutlined'
import { Typography } from '@mui/material'
import CameraIcon from '@mui/icons-material/CameraAltOutlined';
import AddIcon from '@mui/icons-material/AddOutlined';
import KartIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from 'react-router-dom'
import useSharedConfig from '../../../../SharedModules/SharedConfig/SharedConfig';

export default function HeaderContent(arg) {

  
  let navigateTo = useNavigate();
  const {config} = useSharedConfig();



  return (

        <div className="px-2 header-content-wrapper">
            <div className='gridSub '>   
              <ArrowIcon 
                sx={{fontSize:20, color:'#457848'}} 
                onClick={()=>{ navigateTo(config.ROOT_PATH+'/Address') }}
                />
              <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                Select Delevery Location
              </Typography>
            </div>

        </div>

  )
}
