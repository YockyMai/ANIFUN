import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import SignupForm from "@features/signup/ui";

export const Signup = () => {
  return (
    <div className={"auth-form"}>
      <h1>ANI FUN - регистарция</h1>
      <SignupForm />
      <p>
        Уже есть аккаунт? <Link to={"/login"}>Войти</Link>
      </p>
    </div>
  );
};
