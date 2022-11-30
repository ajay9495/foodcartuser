import React from 'react'

import './Row.css'

export default function Row({classList, children, onClick}) {
  return (
    <div  className={classList+" row-base"} onClick={onClick} >
        {children}
    </div>
  )
}
