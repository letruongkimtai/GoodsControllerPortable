import { Module } from '@nestjs/common';
import { DeliveryDetailController } from './delivery-detail.controller';
import { DeliveryDetailService } from './delivery-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { DeliveryEntity } from 'src/delivery/delivery.entity';
import { DeliveryDetailEntity } from './delivery-detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity,DeliveryEntity,DeliveryDetailEntity])],
  controllers: [DeliveryDetailController],
  providers: [DeliveryDetailService]
})
export class DeliveryDetailModule {}
