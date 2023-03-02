import React from "react";
import { Input } from "@shared/ui";
import { $signupFields, setFiled } from "@features/signup/model";
import { useStore } from "effector-react";
import emailIcon from "@shared/assets/images/gifs-in-email.gif";

const EmailStep = () => {
  const email = useStore($signupFields).email;
  return (
    <div>
      <img
        alt={"Изображение пользователя"}
        className={"auth-form__emoji"}
        src={emailIcon}
      />
      <Input
        label={"Ваш email"}
        placeholder={"kaneki_ken@ghoul.zxc"}
        value={email}
        onChange={(e) => {
          setFiled({ filed: "email", value: e.currentTarget.value });
        }}
      />
    </div>
  );
};

export default EmailStep;
