import React, { FC, SetStateAction, useEffect, useRef } from "react";
import "./styles.scss";

interface CodeInputProps {
  values: { key: number; value: string }[];
  setValues: React.Dispatch<SetStateAction<{ key: number; value: string }[]>>;
  label?: string;
}
const CodeInput: FC<CodeInputProps> = ({ values, setValues, label }) => {
  useEffect(() => {
    itemsRef!.current[0]!.focus();
  }, []);

  const itemsRef = useRef<HTMLInputElement[] | null[]>([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, values.length);
  }, [values]);

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const isFirstEl = index === 0;
    const isLastEl = index === values.length - 1;

    if (e.keyCode === 39) {
      //right arrow
      e.preventDefault();
      if (isLastEl) return;
      itemsRef!.current[index + 1]!.setSelectionRange(1, 1);
      itemsRef!.current[index + 1]!.focus();
    }
    if (e.keyCode === 37) {
      //left arrow
      e.preventDefault();
      if (isFirstEl) return;
      itemsRef!.current[index - 1]!.setSelectionRange(1, 1);
      itemsRef!.current[index - 1]!.focus();
    }
  };

  const setInputValue = (value: string, key: number) => {
    if (value.length > 0) {
      itemsRef!.current[key !== values.length - 1 ? key + 1 : key]!.focus();
    } else {
      itemsRef!.current[key === 0 ? 0 : key - 1]!.focus();
    }

    setValues((prev) =>
      prev.map((obj) => {
        if (obj.key === key) return { key: obj.key, value };
        return obj;
      })
    );
  };

  return (
    <div>
      <p>{label}</p>
      <div className={"code-input"}>
        {values.map(({ value, key }, index) => (
          <input
            onKeyDown={(e) => {
              onKeyDown(e, index);
            }}
            ref={(el) => (itemsRef.current[index] = el)}
            value={value}
            maxLength={1}
            key={key + index}
            onChange={(e) => {
              setInputValue(e.currentTarget.value, key);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CodeInput;
