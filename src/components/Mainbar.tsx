import React from "react";
import Navbar from "./Navbar";
import SongCard from "./SongCard";
import styles from "@/styles/mainbar.module.scss"

export interface mainbarprops {
  className?: string;
}

const Mainbar = ({ className }: mainbarprops) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <Navbar />
      <div className={styles.songgrid}>
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </div>
  );
};

export default Mainbar;
