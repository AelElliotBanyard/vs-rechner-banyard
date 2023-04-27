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
  type: "success" | "error" | "warning" | string;
  open: boolean;
  fill: boolean;
  message: string;
  close: () => void;
  link?: boolean;
};

export type DamagePageParams = {
  params: {
    damage: number;
    damageNotEmpty: boolean;
    vs: number;
    vsNotEmpty: boolean;
    vw: number;
    vwNotEmpty: boolean;
    compensation: number;
    compensationNotEmpty: boolean;
    percentage: number;
    percentageNotEmpty: boolean;
    excess: number;
    excessNotEmpty: boolean;
    message: string;
  };
};

export type VsSummePageParams = {
  params: {
    items: Items;
    itemsNotEmpty: boolean;
    squareMetres: number;
    squareMetresNotEmpty: boolean;
    flatRate: number;
    flatRateNotEmpty: boolean;
    vs: number;
    vsNotEmpty: boolean;
    vw: number;
    vwNotEmpty: boolean;
  };
};

export type PDFDamageParams = {
  vs: number;
  vw: number;
  schaden: number;
  result: number;
  percent: number;
  own: number;
  message: string;
};

export type PDFSqrParams = {
  squareMetres: number;
  flatRate: number;
  vs: number;
  vw: number;
};

export type PDFVsSummeParams = {
  items: Item[];
  vw: number;
  vs: number;
};

export type PrintParams = {
  document: any;
  printable: boolean;
  check: number;
};

export type DownloadParams = {
  document: any;
  printable: boolean;
  filename: string;
  check: number;
};
