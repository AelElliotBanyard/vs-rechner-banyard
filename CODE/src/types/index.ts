import { type } from "os";

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

export type Item = {
  gegenstand: string;
  wert: number;
};

export type Items = Item[];

export type CustomAlertParams = {
  type: "success" | "error" | "warning",
  open: boolean,
  fill: boolean,
  message: string,
  close: () => void,
}
