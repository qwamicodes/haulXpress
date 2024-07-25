import { driversProps, vehicleProps } from '../services';
import { ILocation } from './haul';

export type journeyStatus = 'arrived' | 'cancelled' | 'in-progress';

export interface IJourney {
  location: ILocation;
  vehicle: vehicleProps;
  status: journeyStatus;
  departure: string;
  price: number;
}
