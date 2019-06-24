import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { BrandEntity } from 'src/brand/brand.entity';
import { ProductTypeEntity } from 'src/product-type/product-type.entity';
import { OrderDetailEntity } from 'src/order-detail/order-detail.entity';
import { BorrowDetailEntity } from 'src/borrow-detail/borrow-detail.entity';
import { DeliveryDetailEntity } from 'src/delivery-detail/delivery-detail.entity';
import { StorageEntity } from 'src/storage/storage.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity,BrandEntity,ProductTypeEntity,OrderDetailEntity,BorrowDetailEntity,DeliveryDetailEntity,StorageEntity])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
