import { Injectable } from '@nestjs/common';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { ShippingStrategy } from './interfaces/shipping-strategy.interface';
import { IParcel } from './interfaces/parcel.interface';

@Injectable()
export class ShippingService {
  private strategy: ShippingStrategy;

  public setStrategy(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  public calculate(parcel: IParcel): number {
    return this.strategy.calculate(parcel);
  }

  create(createShippingDto: CreateShippingDto) {
    return 'This action adds a new shipping';
  }

  findAll() {
    return `This action returns all shipping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shipping`;
  }

  update(id: number, updateShippingDto: UpdateShippingDto) {
    return `This action updates a #${id} shipping`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipping`;
  }
}
