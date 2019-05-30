import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'//import nestJS typeorm 

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductTypeModule } from './product-type/product-type.module';
import { BrandModule } from './brand/brand.module';



@Module({
  imports: [TypeOrmModule.forRoot(), ProductTypeModule, BrandModule], //define module in the root
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
