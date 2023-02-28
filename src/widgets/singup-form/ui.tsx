import React, { useState } from "react";
import { Input } from "@shared/ui";

export const Signup = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>ANI FUN - регистарция</h1>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        placeholder={"Имя"}
      />
    </div>
  );
};
