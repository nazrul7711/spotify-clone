import React from 'react'

export interface mainbarprops  {
  className?:string
}

const Mainbar = ({className}:mainbarprops) => {
  return (
    <div className={`${className}`}>Main</div>
  )
}

export default Mainbar