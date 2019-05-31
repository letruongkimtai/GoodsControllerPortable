import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { BrandEntity } from 'src/brand/brand.entity';
import { ProductTypeEntity } from 'src/product-type/product-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity,BrandEntity,ProductTypeEntity])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
