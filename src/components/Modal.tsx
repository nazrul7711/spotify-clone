"use client";
import React from "react";
import styles from "@/styles/modal.module.scss";
import { mainbarprops } from "./Mainbar";
import { useSession } from "next-auth/react";
import SignIn from "./SignIn";
import AddSong from "./AddSong";
import { useAppDispatch } from "@/app/store/hook";
import { closeModal } from "@/app/store/spotifySlice";

interface ModalProps extends mainbarprops {}
const Modal = ({ className }: ModalProps) => {
  let { data } = useSession();
  let user = data?.user;
  let dispatch = useAppDispatch();
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.background} onClick={()=>dispatch(closeModal())}></div>
      <div className={styles.modal}>{user ? <AddSong /> : <SignIn />}</div>
    </div>
  );
};

export default Modal;
