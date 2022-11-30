import React from 'react'
import './Col.css'

export default function Col({classList, children, onClick}) {
  return (

    <div className={classList+" col_base"} onClick={onClick}>
        {children}
    </div>

  )
}
