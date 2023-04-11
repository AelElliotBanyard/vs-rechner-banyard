import { NumberInputParams } from "@/types";
import { toNumber, toOutString } from "@/utils/functions";
import React, { useEffect, useState } from "react";

const NumberInput = ({
  value,
  onChange,
  placeholder,
  clear,
  notEmpty,
}: NumberInputParams) => {
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

  useEffect(() => {
    if (clear) {
      setEmpty(true);
    }
  }, [clear]);

  return (
    <div className="numberInput">
      <input
        type="text"
        value={toOutString(value)}
        onFocus={($event) => toNumber($event.target.value)}
        onBlur={($event) => toOutString($event.target.value)}
        onChange={handleChange}
        className="numberInput-input"
      />
      <p className={"numberInput-text " + (empty && !notEmpty ? "empty" : "")}>
        {placeholder}
      </p>
    </div>
  );
};

export default NumberInput;
