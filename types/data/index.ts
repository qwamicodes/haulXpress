export interface IWalkThroughItem {
  image: string;
  title: string;
  description: string;
}

export type paymentType = "momo" | "cash";

export type paymentMethod = {
  name: string;
  value: paymentType;
};
