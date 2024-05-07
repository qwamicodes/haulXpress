import { vehicleType } from '../features/haul';

export type vehicleProps = {
  vehicleType: vehicleType;
  vehicleNo: string;
  vehicleCapacity: number;
  driver_id: string;
  driver: Pick<driversProps, 'driverName' | 'driverPhotoUrl' | 'driverRating'>;
};

export type driversProps = {
  driverName: string;
  driverPhotoUrl: string;
  driverRating: number;
  yearsOfExperience: number;
  languageSpoken: string[];
  driverLicense?: {
    licensePhotoUrl: string;
    certificationPhotoUrl: string;
  };
  vehicleInsurance: {
    insurancePolicyNumber: string;
    insuranceCompany: string;
    validUntil: string;
  };
  loadingAssistance: boolean;
  trackingCapabilities: boolean;
  driversContact: {
    phoneNumber: string;
    email?: string;
  };
};
