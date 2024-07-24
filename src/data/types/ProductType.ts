export type Product = {
  id: string | number;
  new: boolean;
  name: string;
  brandName: string;
  description: string;
  size: {
    sm: number;
    md: number;
    xl: number;
    xxl: number;
  };
  icon: string;
  price: string;
  text: string;
  bgCol: string;
  stars: number;
  currency: string;
};

export type FeatureTS = {
  name: string;
  description: string;
  icon: string;
  text: string;
  bgCol: string;
};
