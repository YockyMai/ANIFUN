import React, { useState } from "react";
import "./styles.scss";
import { useStore } from "effector-react";
import { $signupFields } from "@features/signup/model";
import CodeInput from "@shared/ui/code-input";
import lockGif from "@shared/assets/images/lock.gif";
const ConfirmStep = () => {
  const email = useStore($signupFields).email;

  const [code, setCode] = useState([
    { key: 0, value: "" },
    { key: 1, value: "" },
    { key: 2, value: "" },
    { key: 3, value: "" },
  ]);

  return (
    <div>
      <img
        alt={"Изображение замка"}
        className={"auth-form__emoji"}
        src={lockGif}
      />
      <p>
        На {email} был выслан код подтверждения, для продолжения регистрации
        введите его в поле ниже!
      </p>
      <div className={"code-input__container"}>
        <CodeInput
          label={"Введите 4-х значный код"}
          values={code}
          setValues={setCode}
        />
      </div>
    </div>
  );
};

export default ConfirmStep;
