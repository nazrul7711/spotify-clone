import React from "react";
import { mainbarprops } from "./Mainbar";
import styles from "@/styles/bottomsidebar.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";

interface BottomBarProps extends mainbarprops {}

const BottomSidebar = ({ className }: BottomBarProps) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div >
        <div>
          <div>
            <BsMusicNoteList />
          </div>
          <div>Your Library</div>
        </div>
        <div>
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default BottomSidebar;
