import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "@/styles/mainbar.module.scss";
import BottomSidebar from "./BottomSidebar";
import TopSidebar from "./TopSidebar";
import Modal from "./Modal";

export interface mainbarprops {
  className?: string;
  children?: ReactNode;
}

const Mainbar = ({ children }: mainbarprops) => {
  return (
    <div className={styles.wrapper}>
      <Navbar className={styles.navbar} />
      <TopSidebar className={styles.topsidebar} />
      <BottomSidebar className={styles.bottomsidebar} />
      <Modal className={styles.modal} />
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Mainbar;
