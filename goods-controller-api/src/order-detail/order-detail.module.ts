import { Module } from '@nestjs/common';
import { OrderDetailController } from './order-detail.controller';
import { OrderDetailService } from './order-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/order.entity';
import { OrderDetailEntity } from './order-detail.entity';
import { ProductEntity } from 'src/product/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetailEntity,OrderEntity,ProductEntity])],
  controllers: [OrderDetailController],
  providers: [OrderDetailService]
})
export class OrderDetailModule {}
