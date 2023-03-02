import React, { FC, InputHTMLAttributes } from "react";
import "./styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
}

const Input: FC<InputProps> = ({ icon, label, ...other }) => {
  return (
    <label className="input">
      <span className="input__icon">{icon}</span>
      <span className="input__label">{label}</span>
      <input className="input__field" {...other} />
    </label>
  );
};

export default Input;
