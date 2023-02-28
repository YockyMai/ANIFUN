import React, { FC } from "react";
import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "danger";
  variant?: "outline" | "filled";
}

const Button: FC<ButtonProps> = ({ children, color, variant, ...other }) => {
  const prefix = "button";
  const classes = ["button"];

  if (color) {
    classes.push(`${prefix}-color-${color}`);
  }

  if (variant) {
    classes.push(`${prefix}-variant-${color}`);
  }

  return (
    <button className={classes.join(" ")} {...other}>
      {children}
    </button>
  );
};

export default Button;
