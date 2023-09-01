"use client";
import TopSidebar from "@/components/TopSidebar";
import styles from "@/styles/index.module.scss";
import BottomSidebar from "@/components/BottomSidebar";

import Mainbar from "@/components/Mainbar";
import ReactHookForm from "@/components/ReactHookForm";

export default function Home() {
  type Inputs = {
    name: string;
    surname: string;
  };
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
/*
npm i react-hook-form
import {useForm} from "react-hook-form"
{register,handle,formState:{error}} = useForm({
  defaultValues:{
    firstName:"james",
    lastName:"luke"
  }
})
console.log(error)
{...register("firstname"),{required:"this is needed",minLength:{
  length:4,
  message:"atleast 4 is needed"
}}}
onSubmit={handleSublit((data)=>console.log(data))}
*/
