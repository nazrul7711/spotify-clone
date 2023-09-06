"use client";
import React from "react";
import styles from "@/styles/topsidebar.module.scss";
import SidebarItem from "./SidebarItem";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { mainbarprops } from "./Mainbar";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface TopsidebarProps extends mainbarprops {}

const TopSidebar = ({ className }: TopsidebarProps) => {
  let path = usePathname();
  let router = useRouter()

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.firstBox}>
        <SidebarItem
          className={path == "/" ? styles.active : ""}
          link="/"
          Icon={AiOutlineHome}
          title={"Home"}

        />
        <SidebarItem
          className={path == "/search" ? styles.active : ""}
          link="/search"
          Icon={AiOutlineSearch}
          title={"Search"}

        />
      </div>
    </div>
  );
};

export default TopSidebar;
