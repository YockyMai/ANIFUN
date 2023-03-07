import React from "react";
import { SiteLogo } from "@shared/ui";
import "./styles.scss";
import { Navbar } from "@widgets/navbar";
import UserControlBox from "@entities/user-control-box/ui";

export const SideBar = () => {
  return (
    <div className={"sidebar"}>
      <SiteLogo />
      <Navbar />
      <UserControlBox />
    </div>
  );
};
