import React from 'react'
import './Section.css'

export default function Section({classList, children}) {
  return (
    <div className={classList+" section-base"} >
      {children}
    </div>
  )
}
