import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { StorageEntity } from './storage.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity,StorageEntity])],
  providers: [StorageService],
  controllers: [StorageController]
})
export class StorageModule {}
