import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { BranchEntity } from 'src/branch/branch.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,BranchEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
