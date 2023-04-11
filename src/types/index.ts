export type NumberInputParams = {
  value: number;
  onChange: (value: number) => void;
  placeholder: string;
  notEmpty: boolean;
  clear: boolean;
};

export type TextInputParams = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  notEmpty: boolean;
  clear: boolean;
};
