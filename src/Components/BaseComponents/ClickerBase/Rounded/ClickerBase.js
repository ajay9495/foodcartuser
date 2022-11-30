import React from 'react'

import './ClickerBase.css'

export default function ClickerBase(props) {
  return (

    <div className='r-clicker-base-wrapper'>
      <div className='r-clicker-content'>
        {props.children}
      </div>
    </div>

  )
}











