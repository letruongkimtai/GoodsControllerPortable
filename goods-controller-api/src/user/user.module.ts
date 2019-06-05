import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { BranchEntity } from 'src/branch/branch.entity';
import { OrderEntity } from 'src/order/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,BranchEntity,OrderEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
