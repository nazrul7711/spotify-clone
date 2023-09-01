"use client";
import React from "react";
import styles from "@/styles/signup.module.scss";
import { FaSpotify } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Button";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.container}>
        <div className={styles.google}>
          <div className={styles.spotifylogo}>
            <FaSpotify size={40} />
            <div>Spotify</div>
          </div>
          <div>Sign up for free to start listening.</div>
          <button>
            <BsFacebook size={20} />
            <span>Sign up with Facebook</span>
          </button>
          <button>
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
          <p>Or</p>
        </div>
        <div className={styles.general}>
          <div className={styles.email}>
            <div className={styles.title}> What's your email?</div>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className={styles.email}>
            <div className={styles.title}>Create password</div>
            <input type="password" placeholder="Create a password" />
          </div>
          <div className={styles.title}>What's your date of birth?</div>
          <div className={styles.dob}>
            <div>
              <p>Year</p>
              <input type="text" placeholder="YYYY" />
            </div>
            <div>
              <p>Month</p>
              <select name="months" id="months">
                <option value="">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div>
              <p>Day</p>
              <input type="text" placeholder="DD" />
            </div>
          </div>
          <div className={styles.title}>What's your gender?</div>
          <div className={styles.gender}>
            <label htmlFor="male">
              <input type="radio" />
              Male
            </label>

            <label htmlFor="female">
              <input type="radio" />
              Female
            </label>
            <label htmlFor="non-binary">
              <input type="radio" />
              Non-binary
            </label>
            <label htmlFor="other">
              <input type="radio" />
              Other
            </label>
          </div>
          <div className={styles.button}>
            <Button
              title="Sign up"
              type="submit"
              backgroundColor="rgb(59, 210, 59)"
              color="black"
            />
          </div>
        </div>
        <p className={styles.link}>
          Have an account? <Link href="/auth/signIn">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default page;
