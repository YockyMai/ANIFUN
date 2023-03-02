import React from "react";
import userGif from "@shared/assets/images/user.gif";
import { Input } from "@shared/ui";
import { useStore } from "effector-react";
import { $signupFields, setFiled } from "@features/signup/model";

const UsernameStep = () => {
  const username = useStore($signupFields).username;

  return (
    <div>
      <img
        alt={"Изображение пользователя"}
        className={"auth-form__emoji"}
        src={userGif}
      />
      <Input
        label={"Имя пользователя"}
        placeholder={"anime_master228"}
        value={username}
        onChange={(e) => {
          setFiled({ filed: "username", value: e.currentTarget.value });
        }}
      />
    </div>
  );
};

export default UsernameStep;
