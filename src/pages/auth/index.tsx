import React from "react";
import { Outlet } from "react-router";
import "./styles.scss";

const AuthPage = () => {
  return (
    <div className={"auth"}>
      <Outlet />
    </div>
  );
};

export default AuthPage;
