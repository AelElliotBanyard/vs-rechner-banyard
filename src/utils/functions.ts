const toNumber = (value: string) => {
  if (value === "") {
    return Math.PI;
  } else if (value === "0") {
    return 0;
  } else if (value === " ") {
    return Math.PI;
  }
  const numericInput = value.toString().replace(/[^0-9.]/g, "");
  return numericInput;
};

export { toNumber };
