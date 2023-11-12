import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { DHLStrategy } from './strategies/dhl.strategy';
import { FedexStrategy } from './strategies/fedex.strategy';
import { UpsStrategy } from './strategies/ups.strategy';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get('dhl')
  getDhlShippingCost() {
    this.shippingService.setStrategy(new DHLStrategy());
    return this.shippingService.calculate({ weight: 1, volume: 2 });
  }

  @Get('fedex')
  getFedexShippingCost() {
    this.shippingService.setStrategy(new FedexStrategy());
    return this.shippingService.calculate({ weight: 1, volume: 3 });
  }

  @Get('ups')
  getUpsShippingCost() {
    this.shippingService.setStrategy(new UpsStrategy());
    return this.shippingService.calculate({ weight: 1, volume: 4 });
  }

  @Post()
  create(@Body() createShippingDto: CreateShippingDto) {
    return this.shippingService.create(createShippingDto);
  }

  @Get()
  findAll() {
    return this.shippingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShippingDto: UpdateShippingDto,
  ) {
    return this.shippingService.update(+id, updateShippingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingService.remove(+id);
  }
}
