import React from 'react'
import './HeaderOffset.css'
import YoutubeIcon from '@mui/icons-material/YouTube'
import Search from '@mui/icons-material/SearchOutlined'
import { Typography } from '@mui/material'

export default function HeaderOffset() {
   


  return (

        <div className="header-offset-content-wrapper">
            <div className='header-offset-grid-sub header-offset-grid-left'>   
                    
              <YoutubeIcon sx={{fontSize:40, color:'#fff'}} />
              <Typography sx={{fontSize:15, fontWeight:1000,marginLeft:'10px', color:"#fff"}} >
                Youtube
              </Typography>
            </div>
            <div className='header-offset-grid-sub header-offset-grid-right'>   
                    <Search sx={{fontSize:30, color:'#fff'}}  />
            </div>
        </div>

  )
}
