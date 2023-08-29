import React from "react";
import styles from "@/styles/topsidebar.module.scss";
import SidebarItem from "./SidebarItem";
import { AiOutlineSearch, AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { mainbarprops } from "./Mainbar";

interface TopsidebarProps extends mainbarprops{

} 

const TopSidebar = ({className}:TopsidebarProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.firstBox}>
        <SidebarItem Icon={AiOutlineHome} title={"Home"} />
        <SidebarItem Icon={AiOutlineSearch} title={"Search"} />
      </div>
      <div className={styles.secondBox}>
        <div >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default TopSidebar;
