"use client";
import React, { useState } from "react";
import { mainbarprops } from "./Mainbar";
import styles from "@/styles/bottomsidebar.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useAppDispatch} from "@/app/store/hook";
import { openModal } from "@/app/store/spotifySlice";

interface BottomBarProps extends mainbarprops {}

const BottomSidebar = ({ className }: BottomBarProps) => {
  let dispatch = useAppDispatch()
  let { data } = useSession();
  let user = data?.user;
  function songAddHandler() {
    dispatch(openModal())
  }
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div>
        <div>
          <div>
            <BsMusicNoteList />
          </div>
          <div>Your Library</div>
        </div>
        <div onClick={songAddHandler} className={styles.plus}>
          <AiOutlinePlus />
        </div>
      </div>
      
    </div>
  );
};

export default BottomSidebar;
