import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LogService } from './log.service';
import { logDTO } from './log.dto';

@Controller('log')
export class LogController {
    constructor(
        private logService:LogService
    ){}

    @Get()
    showLogs(){
        return this.logService.showLogs();
    }

    @Post()
    createLog(@Body() data:logDTO){
        return this.logService.createLog(data);
    }

    @Put(':id')
    updateLog(@Param() id:number,@Body() data:logDTO){
        return this.logService.updateLog(id,data);
    }

    @Delete(':id')
    deleteLog(@Param() id:number){
        return this.logService.deleteLog(id);
    }
}
