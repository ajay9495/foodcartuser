import React from 'react'

import './HeaderOverlay.css'
import { InputBase } from '@mui/material'
import ArrowIcon from '@mui/icons-material/ArrowBack'
import MicIcon from'@mui/icons-material/Mic'

export default function HeaderOverlay(arg) {
    
    function callToggleSearchResults(){
        arg.props.toggleSearchResult()
    }

    function callToggleOverlay(){
        arg.props.closeSearchResult()
        arg.props.toggleOverlay()
    }

  return (
    <div className='header-overlay-wrapper' >
        <div className="gridSub">
            <ArrowIcon onClick={callToggleOverlay} />
        </div>
        <div className="gridSub">
            <InputBase fullWidth={true} placeholder=' Search' sx={{ backgroundColor:'#0001' }} />
        </div>
        <div className="gridSub">
            <div className="mic-icon-wrapper" onClick={callToggleSearchResults}>
                <MicIcon />
            </div>
        </div>
    </div>
  )
}
