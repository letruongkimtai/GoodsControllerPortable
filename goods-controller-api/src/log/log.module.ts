import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogEntity } from './log.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LogEntity])],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule {}
