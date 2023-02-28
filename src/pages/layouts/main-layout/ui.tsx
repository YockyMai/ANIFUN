import React, { FC, ReactNode } from "react";
import "./styles.scss";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div className={"main-layout"}>{children}</div>;
};
