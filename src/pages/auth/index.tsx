import React from "react";
import "./styles.scss";
import { Outlet } from "react-router";
import AuthVideo from "@pages/auth/ui/auth-video";

const AuthPage = () => {
  return (
    <div className={"auth-page"}>
      <div className={"auth-page-form"}>
        <Outlet />
      </div>
      <AuthVideo />
    </div>
  );
};

export default AuthPage;
