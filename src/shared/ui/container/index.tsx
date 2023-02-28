import React, { FC } from "react";
import "./styles.scss";
import { sizes } from "../types";

interface ContainerProps {
  children: React.ReactNode;

  size?: sizes;
}

const Container: FC<ContainerProps> = ({ children, size, ...other }) => {
  const prefix = "container";
  const classes = ["container"];

  if (size) {
    classes.push(`${prefix}-width-${size}`);
  }

  return (
    <button className={classes.join(" ")} {...other}>
      {children}
    </button>
  );
};

export default Container;
