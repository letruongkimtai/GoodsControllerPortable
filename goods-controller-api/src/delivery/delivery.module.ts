import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { DeliveryDetailEntity } from 'src/delivery-detail/delivery-detail.entity';
import { DeliveryEntity } from './delivery.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,DeliveryDetailEntity,DeliveryEntity])],
  controllers: [DeliveryController],
  providers: [DeliveryService]
})
export class DeliveryModule {}
