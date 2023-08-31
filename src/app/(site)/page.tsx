"use client"
import TopSidebar from "@/components/TopSidebar";
import styles from "@/styles/index.module.scss"
import BottomSidebar from "@/components/BottomSidebar";
// import { Main } from "next/document";
import Mainbar from "@/components/Mainbar";


export default function Home() {
  return (
    <main className={styles.wrapper}>
      <TopSidebar className={styles.topsidebar} />
      <BottomSidebar className={styles.bottomsidebar} />
      <Mainbar className={styles.mainbar} />
    </main>
  );
}
/*
font figtree
title and description chnage
sidebar
usePathname
useRouter is imported from next/navigation 
to use useSession make a seperate provider component that wraps children with Session and then wrap this component inside layout component and wrap the children that is inside body

*/
