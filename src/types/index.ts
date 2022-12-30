export type Step = {
  id: number;
  title: string;
};

export type AddOn = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export type Plan = {
  id: number;
  title: string;
  price: number;
  typePrice: string;
  icon: string;
  subTitle?: null;
};
