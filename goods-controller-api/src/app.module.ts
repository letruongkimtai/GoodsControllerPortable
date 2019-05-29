import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'//import mestJS typeorm 

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot()], //define module in the root
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
