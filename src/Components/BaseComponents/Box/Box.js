import React from 'react'
import './Box.css'
export default function Box({customProp, children}) {

  return (
    <div className={customProp+" box_class"}> 
        {children}
    </div>
  )
}
