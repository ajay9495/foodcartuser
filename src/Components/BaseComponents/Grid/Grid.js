import React from 'react'
import './Grid.css'


export default function Grid({classList, children}) {


  return (
    <div className={classList+" grid-base"} >
      {children}
    </div>
  )
}
