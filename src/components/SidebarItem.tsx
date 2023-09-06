import React from "react";
import { IconType } from "react-icons";
import styles from "@/styles/sidebaritem.module.scss";
import { mainbarprops } from "./Mainbar";
import Link from "next/link";

interface SidebarItemProps extends mainbarprops {
  Icon: IconType;
  title: string;
  link: string;
}

const SidebarItem = ({ Icon, title, link, className }: SidebarItemProps) => {
  return (
    <Link href={link} className={`${styles.wrapper} ${className}`}>
      <div>
        <Icon />
      </div>
      <div>{title}</div>
    </Link>
  );
};

export default SidebarItem;
