import { TextInputParams } from "@/types";
import React, { useEffect, useState } from "react";

const TextInput = ({
  value,
  onChange,
  placeholder,
  clear,
  notEmpty,
}: TextInputParams) => {
  const [empty, setEmpty] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    onChange(e.target.value);
  };

  useEffect(() => {
    if (clear) {
      setEmpty(true);
    }
  }, [clear]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <p>
        {placeholder}
      </p>
    </div>
  );
};

export default TextInput;
