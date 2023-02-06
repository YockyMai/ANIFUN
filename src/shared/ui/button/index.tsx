import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, color, ...other }) => {
  const classes = ["button"];

  return (
    <button className={classes.join(" ")} {...other}>
      {children}
    </button>
  );
};

export default Button;
