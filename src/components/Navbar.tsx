"use client";
import React from "react";
import styles from "@/styles/navbar.module.scss";
import Button from "./Button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { mainbarprops } from "./Mainbar";

interface NavbarProps extends mainbarprops {}

const Navbar = ({ className }: NavbarProps) => {
  const router = useRouter();

  function signupHandler() {
    router.push("/auth/signUp");
  }
  function loginHandler() {
    signIn();
  }
  function logoutHandler() {
    signOut();
  }
  let { data } = useSession();
  let user = data?.user;

  return (
    <div className={`${className} ${styles.wrapper} `}>
      <div className={styles.arrows}>
        <div>
          <AiOutlineLeft size={25} />
        </div>
        <div>
          <AiOutlineRight size={25} />
        </div>
      </div>
      <div>
        {user ? (
          <Button
            title={"Log Out"}
            type="button"
            backgroundColor="black"
            color="rgb(224, 224, 224)"
            onClick={logoutHandler}
          />
        ) : (
          <div className={styles.buttons}>
            <Button
              title={"Sign up"}
              type="button"
              backgroundColor="black"
              color="rgb(224, 224, 224)"
              onClick={signupHandler}
            />
            <Button
              title={"Log in"}
              type="button"
              backgroundColor="rgb(224, 224, 224)"
              color="rgb(27, 27, 27)"
              onClick={loginHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
