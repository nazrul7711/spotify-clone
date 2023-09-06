import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import styles from "@/styles/signin.module.scss";
import Link from "next/link";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: "Email is required field" })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.inputField}>
            <div>Password</div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "password is required field",
                pattern: {
                  value:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:",
                },
              })}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className={styles.btn}>
            Log In
          </button>

          <p>
            Don't have an account?{" "}
            <Link href="/auth/signUp">Sign up for Spotify</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
