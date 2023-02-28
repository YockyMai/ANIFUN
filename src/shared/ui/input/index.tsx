import React, { FC, InputHTMLAttributes } from "react";
import "./styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ placeholder, value, onChange, ...other }) => {
  return (
    <label className="input">
      <input
        value={value}
        onChange={onChange}
        className="input__field"
        type="text"
        placeholder=" "
        {...other}
      />
      <span className="input__label">{placeholder}</span>
    </label>
  );
};

export default Input;
