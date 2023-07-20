type others = "others";

type productType =
  | "agriculture"
  | "logistics"
  | "construction"
  | "waste-management"
  | others;

export type vehicleType =
  | "commercial"
  | "truck"
  | "container"
  | "tow"
  | "dump"
  | "construction"
  | others;

export type IHaulType = {
  name: string;
  value: productType | vehicleType;
};

export type haulingStateProps = {
  productType: IHaulType[];
  vehicleType: IHaulType[];
};

export type haulSelection = {
  percentage: number;
  subHeaderText: string;
  buttonText: string;
  type: "product" | "vehicle";
  data: IHaulType[];
};

export type locationType = "pickup" | "destination";

export type ILocations = {
  name: string;
  lat: string;
  long: string;
};

export type ILocationSlice = {
  pickup: ILocations;
  destination: ILocations;
  distance: string;
};

export type locationComponentProp = {
  type: locationType;
  show: boolean;
};
