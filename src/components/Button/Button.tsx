import React from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color = "primary",
  className,
}) => {
  return (
    <button
      className={cn(styles.button, styles[color], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
