"use client";
import React, { useState } from "react";
import { mainbarprops } from "./Mainbar";
import styles from "@/styles/bottomsidebar.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { useSession } from "next-auth/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface BottomBarProps extends mainbarprops {}

const BottomSidebar = ({ className }: BottomBarProps) => {
  let [showModal, setShowModal] = useState<boolean>(false);
  let { data } = useSession();
  let user = data?.user;
  function songAddHandler() {}
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div>
        <div>
          <div>
            <BsMusicNoteList />
          </div>
          <div>Your Library</div>
        </div>
        <div onClick={songAddHandler}>
          <AiOutlinePlus />
        </div>
      </div>
      
    </div>
  );
};

export default BottomSidebar;
