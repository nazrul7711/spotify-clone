"use client";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "@/styles/mainbar.module.scss";
import BottomSidebar from "./BottomSidebar";
import TopSidebar from "./TopSidebar";
import Modal from "./Modal";
import { useAppSelector } from "@/app/store/hook";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export interface mainbarprops {
  className?: string;
  children?: ReactNode;
}

const Mainbar = ({ children }: mainbarprops) => {
  const count = useAppSelector((state) => state.spotify.value);
  const showModal = useAppSelector((state) => state.spotify.showModal);

  return (
    <div className={styles.wrapper}>
      <Navbar className={styles.navbar} />
      <TopSidebar className={styles.topsidebar} />
      <BottomSidebar className={styles.bottomsidebar} />
      {showModal && <Modal className={styles.modal} />}

      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Mainbar;
