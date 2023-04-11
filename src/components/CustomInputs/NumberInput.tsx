import { NumberInputParams } from "@/types";
import { toNumber, toOutString } from "@/utils/functions";
import React, { useState } from "react";

const NumberInput = ({ value, onChange, placeholder }: NumberInputParams) => {
  const [empty, setEmpty] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = "";
    if (e.target.value === "") {
      setEmpty(true);
      input = Math.PI.toString();
    } else if (
      e.target.value.length > 1 &&
      e.target.value[0] === "0" &&
      e.target.value[1] === "."
    ) {
      setEmpty(false);
      input = e.target.value;
    } else if (e.target.value.length > 1 && e.target.value[0] === "0") {
      setEmpty(false);
      input = e.target.value.slice(1);
    } else {
      setEmpty(false);
      input = e.target.value;
    }
    onChange(toNumber(input));
  };

  return (
    <div>
      <input
        type="text"
        value={toOutString(value)}
        onFocus={($event) => toNumber($event.target.value)}
        onBlur={($event) => toOutString($event.target.value)}
        onChange={handleChange}
      />
      <p>{placeholder}</p>
    </div>
  );
};

export default NumberInput;
