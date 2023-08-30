import React from "react";
import styles from "@/styles/button.module.scss"

type ButtonProps = {
  title: string;
  type: "button" | "submit" | "reset";
  backgroundColor?:string;
  color?:string
};

const Button = ({ title, type,backgroundColor,color }: ButtonProps) => {
  return (
    <div>
      <button type={type} className={styles.btn} style={{backgroundColor:`${backgroundColor}`,color:`${color}`}}>{title}</button>
    </div>
  );
};

export default Button;