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

const toOutString = (value: number) => {
  let numericInput = value.toString().replace(/[^0-9.]/g, "");
  if (numericInput === Math.PI.toString()) {
    numericInput = "";
  }
  const [integerPart, decimalPart] = numericInput.split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "'"
  );
  const formattedInput =
    decimalPart !== undefined
      ? `${formattedIntegerPart}.${decimalPart}`
      : formattedIntegerPart;

  return formattedInput;
};

export { toNumber, toOutString };
