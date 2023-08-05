import { driversProps, vehicleProps } from "../services";
import { ILocation } from "./haul";

type journeyStatus = "arrived" | "cancelled" | "in-progress";

export interface IJourney {
  price: number;
  departure: string;
  location: ILocation;
  status: journeyStatus;
  vehicle: vehicleProps;
}
