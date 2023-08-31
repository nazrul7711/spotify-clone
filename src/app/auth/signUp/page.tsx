"use client";
import React from "react";
import styles from "@/styles/signup.module.scss";
import { FaSpotify } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Button";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.google}>
          <div className={styles.spotifylogo}>
            <FaSpotify size={40} />
            <div>Spotify</div>
          </div>
          <div>Sign up for free to start listening.</div>
          <button>
            <BsFacebook />
            <span>Sign up with Facebook</span>
          </button>
          <button>
            <FcGoogle />
            <span>Sign up with Google</span>
          </button>
          <p>Or</p>
        </div>
        <div> What's your email?</div>
        <input type="text" placeholder="Enter your email" />
        <div>Create password</div>
        <input type="password" placeholder="Create a password" />
        <div>What's your date of birth?</div>
        <div>
          <div>
            <p>Year</p>
            <input type="text" placeholder="YYYY" />
          </div>
          <div>
            <p>Month</p>
            <select name="" id="">
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
        <div>What's your gender?</div>
        <div>
          <label htmlFor="male">
            <input type="radio" />
          </label>

          <label htmlFor="female">
            <input type="radio" />
          </label>
          <label htmlFor="non-binary">
            <input type="radio" />
          </label>
          <label htmlFor="other">
            <input type="radio" />
          </label>
        </div>
        <Button
          title="Sign up"
          type="submit"
          backgroundColor="green"
          color="black"
        />
      </div>
    </div>
  );
};

export default page;
