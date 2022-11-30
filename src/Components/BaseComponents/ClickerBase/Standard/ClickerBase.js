import React from 'react'

import './ClickerBase.css'

export default function ClickerBase(props) {
  return (

    <div className='clicker-base-wrapper'>
      <div className='clicker-content'>
        {props.children}
      </div>
    </div>

  )
}











