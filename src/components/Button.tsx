import React from "react";
import styles from "@/styles/button.module.scss";

type ButtonProps = {
  title: string;
  type: "button" | "submit" | "reset";
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  className?:string
};

const Button = ({
  title,
  type,
  backgroundColor,
  color,
  onClick,
  className
}: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className={`${styles.btn} ${className}`}
        style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
