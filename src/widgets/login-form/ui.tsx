import React from "react";
import { Button, Input } from "@shared/ui";
import { Link } from "react-router-dom";
import "./styles.scss";

export const Login = () => {
  return (
    <div className={"auth__form"}>
      <form>
        <Input
          type={"email"}
          placeholder={"example@gmail.com"}
          label={"Ваш email"}
        />
        <Input type={"password"} placeholder={"Пароль"} />

        <Button>Войти</Button>
      </form>

      <p>
        Не успели присоединится? <Link to={"/signup"}>Создать аккаунт</Link>
      </p>
    </div>
  );
};
