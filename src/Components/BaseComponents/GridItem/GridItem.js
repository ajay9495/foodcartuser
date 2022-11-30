import React from 'react'
import './GridItem.css'

export default function GridItem({classList, children, onClick}) {
  return (
    <div  className={classList+" grid-item-base"}  onClick={onClick}>
        {children}
    </div>
  )
}



