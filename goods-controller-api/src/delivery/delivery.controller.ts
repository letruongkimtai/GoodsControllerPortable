import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryDTO } from './delivery.dto';

@Controller('delivery')
export class DeliveryController {
    constructor(
        private deliveryService:DeliveryService
    ){}

    @Get()
    allDelivery(){
        return this.deliveryService.showAll();
    }

    @Post()
    createDelivery(@Body() data:DeliveryDTO){
        return this.deliveryService.add(data);
    }

    @Get(':id')
    showDelivery(@Param('id') id:string) {
        return this.deliveryService.deliveryWithId(id);
    }

    @Put(':id')
    updateDelivery(@Param('id') id:string,@Body() data:Partial<DeliveryDTO>){
        return this.deliveryService.update(id,data);
    }

    @Delete(':id')
    deleteDelivery(@Param('id') id:string){
        return this.deliveryService.delete(id);
    }
}
