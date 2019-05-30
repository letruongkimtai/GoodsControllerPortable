import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type/product-type.service';
import { ProductTypeEntity } from './product-type.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ProductTypeEntity])], //allow entity to access typeorm module
  controllers: [ProductTypeController],
  providers: [ProductTypeService]
})
export class ProductTypeModule { }
