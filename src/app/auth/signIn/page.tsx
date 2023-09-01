import React from "react";
import styles from "@/styles/auth.module.scss";
import { FaSpotify } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "@/components/Button";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <FaSpotify size={30} />
        <div>Spotify</div>
      </div>
      <form>
        <div className={styles.container}>
          <h1>Log in to Spotify</h1>
          <button>
            <BsFacebook size={20} style={{ color: "#3498eb" }} />
            <span>Sign up with Facebook</span>
          </button>
          <button>
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
          <button>
            <FaApple size={20} style={{ color: "white" }} />
            <span>Sign up with Apple</span>
          </button>
          <button>
            <span>Continue with email</span>
          </button>
          <span className={styles.line}></span>
          <div className={styles.inputField}>
            <div>Email or username</div>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.inputField}>
            <div>Password</div>
            <input type="password" placeholder="Password" />
          </div>

          <button className={styles.btn}>Log In</button>

          <p>
            Don't have an account?{" "}
            <Link href="auth/signUp">Sign up for Spotify</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default page;
