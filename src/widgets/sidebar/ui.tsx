import React from "react";
import { SiteLogo } from "@shared/ui";
import "./styles.scss";

export const SideBar = () => {
  return (
    <div className={"sidebar"}>
      <SiteLogo />
      <div>Контент</div>
      <div></div>
    </div>
  );
};
