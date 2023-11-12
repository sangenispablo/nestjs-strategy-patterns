import { IParcel } from './parcel.interface';

export interface ShippingStrategy {
  // esta interface tienen que implementar todas las estrategias
  calculate(parcel: IParcel): number;
}
