import React from 'react'
import './Wrapper.css'

export default function Wrapper({classList, children}) {
  return (

    <div className={classList+" wrapper-base"} >
        {children}
    </div>

  )
}
