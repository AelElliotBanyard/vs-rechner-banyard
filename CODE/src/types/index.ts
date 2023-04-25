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
    items: [
      {
        gegenstand: string;
        wert: number;
      }
    ];
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
