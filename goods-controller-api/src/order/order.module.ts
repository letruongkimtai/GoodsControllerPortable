import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { OrderDetailEntity } from 'src/order-detail/order-detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OrderEntity,OrderDetailEntity])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
