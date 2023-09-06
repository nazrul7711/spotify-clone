"use client";
import React from "react";
import styles from "@/styles/modal.module.scss";
import { mainbarprops } from "./Mainbar";
import { useSession } from "next-auth/react";
import SignIn from "./SignIn";
import AddSong from "./AddSong";

interface ModalProps extends mainbarprops {}
const Modal = ({ className }: ModalProps) => {
  let { data } = useSession();
  let user = data?.user;
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.background}></div>
      <div className={styles.modal}>{user ? <AddSong /> : <SignIn />}</div>
    </div>
  );
};

export default Modal;
