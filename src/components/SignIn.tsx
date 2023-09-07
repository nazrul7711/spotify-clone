"use client"
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "@/styles/signin.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/store/hook";
import { closeModal } from "@/app/store/spotifySlice";

type FormType = {
  email: string;
  password: string;
};

const SignIn = () => {
  let router = useRouter();
  let dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  
  const onSubmit: SubmitHandler<FormType> =async  (data) => {
    let res = await signIn("credentials",{
      email:data.email,
      password:data.password
    })
    if (res?.ok){
      router.push("/")
    }
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.close} onClick={()=>dispatch(closeModal())}>
          <AiOutlineClose />
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>Log in to Spotify</h1>
          <div className={styles.signInButtons}>
            <button type="button">
              <BsFacebook size={20} style={{ color: "#3498eb" }} />
              <span>Sign up with Facebook</span>
            </button>
            <button>
              <FcGoogle size={20} />
              <span>Sign up with Google</span>
            </button>
            <button>
              <FaApple size={20} style={{ color: "black" }} />
              <span>Sign up with Apple</span>
            </button>
          </div>
          <div className={styles.inputField}>
            <div>Email or username</div>
            <input
              type="email"
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
        </div>
      </form>
    </div>
  );
};

export default SignIn;
