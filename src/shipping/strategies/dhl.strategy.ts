import { IParcel } from '../interfaces/parcel.interface';
import { ShippingStrategy } from '../interfaces/shipping-strategy.interface';

export class DHLStrategy implements ShippingStrategy {
  calculate(parcel: IParcel): number {
    return parcel.volume * parcel.weight;
  }
}
