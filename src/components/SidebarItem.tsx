import React from "react";
import { IconType } from "react-icons";
import { AiFillAccountBook } from "react-icons/ai";
import styles from "@/styles/sidebaritem.module.scss"
import { mainbarprops } from "./Mainbar";

interface SidebarItemProps extends mainbarprops {
  Icon: IconType;
  title: string;
};

const SidebarItem = ({ Icon, title }: SidebarItemProps) => {
  return (
    <div className={`${styles.wrapper} `}>
      <div>
        <Icon />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default SidebarItem;
