import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'//import nestJS typeorm 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductTypeModule } from './product-type/product-type.module';
import { BrandModule } from './brand/brand.module';
import { ProductModule } from './product/product.module';
import { BranchModule } from './branch/branch.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryDetailModule } from './delivery-detail/delivery-detail.module';




@Module({
  imports: [TypeOrmModule.forRoot(), ProductTypeModule, BrandModule, ProductModule, BranchModule, UserModule, OrderModule, OrderDetailModule, DeliveryModule, DeliveryDetailModule], //define module in the root
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
