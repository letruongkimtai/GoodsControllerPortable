import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { OrderDetailEntity } from 'src/order-detail/order-detail.entity';
import { UserEntity } from 'src/user/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OrderEntity,UserEntity,OrderDetailEntity])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
