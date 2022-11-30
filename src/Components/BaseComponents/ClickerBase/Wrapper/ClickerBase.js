import React from 'react'

import './ClickerBase.css'

export default function ClickerBase(props) {
  return (

    <div className='w-clicker-base-wrapper'>
      <div className='w-clicker-content'>
        {props.children}
      </div>
    </div>

  )
}











