import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
}

const PasswordInput: FC<InputProps> = ({ icon, label, ...other }) => {
  return (
    <label className="input">
      <span className="input__icon">{icon}</span>
      <span className="input__label">{label}</span>
      <input className="input__field" {...other} />
    </label>
  );
};

export default PasswordInput;
