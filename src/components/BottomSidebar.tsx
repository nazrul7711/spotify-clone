import React from 'react'
import { mainbarprops } from './Mainbar'
import styles from "@styles/bottomsidebar.module.scss"

interface BottomBarProps extends mainbarprops{

}

const BottomSidebar = ({className}:BottomBarProps) => {
  return (
    <div className={`${className}`}>BottomSidebar</div>
  )
}

export default BottomSidebar