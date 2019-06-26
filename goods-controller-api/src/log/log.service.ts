import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogEntity } from './log.entity';
import { Repository } from 'typeorm';
import { logDTO } from './log.dto';

@Injectable()
export class LogService {
    constructor(
        @InjectRepository(LogEntity)
        private logRepository:Repository<LogEntity>
    ){}

    async showLogs(){
        return await this.logRepository.find();
    }

    async createLog(data:logDTO){
        const log = await this.logRepository.create(data);
        await this.logRepository.save(log);
        return log;
    }

    async updateLog(id:number,data:logDTO){
        await this.logRepository.update({id},data);
        return await this.logRepository.findOne({id});
    }

    async deleteLog(id:number){
        await this.logRepository.delete({id});
        return {deleted: true};
    }
}
