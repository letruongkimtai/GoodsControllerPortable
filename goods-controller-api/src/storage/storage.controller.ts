import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { storageDTO } from './storage.DTO';

@Controller('storage')
export class StorageController {
    constructor(private storageService:StorageService){}

    @Get()
    showAllStorages(){
        return this.storageService.showAllStorages()
    }

    @Post()
    createStorage(@Body() data:storageDTO){
        return this.storageService.createStorage(data);
    }

    @Put(':id')
    updateStorage(@Param() id:number,@Body() data:storageDTO){
        return this.storageService.updateStorage(id,data);
    }

    @Delete(':id')
    deleteStorage(@Param() id:number){
        return this.storageService.deleteStorage(id);
    }
}
