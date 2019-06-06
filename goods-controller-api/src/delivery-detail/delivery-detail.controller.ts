import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { DeliveryDetailService } from './delivery-detail.service';
import { DeliveryDetailDTO } from './delivery-detail.dto';

@Controller('delivery-detail')
export class DeliveryDetailController {
    constructor(
        private deliveryDetailService:DeliveryDetailService
    ){}

    @Get()
    showAllDetail(){
        return this.deliveryDetailService.showAllDetail();
    }

    @Post()
    addOrderDetail(@Body() data:DeliveryDetailDTO){
        return this.deliveryDetailService.addDetail(data);
    }

    @Get(':id')
    showDetail(@Param() id:string){
        return this.deliveryDetailService.showDetail(id);
    }

    @Delete(':id')
    deleteOrderDetail(@Param() id:string){
        return this.deliveryDetailService.deleteDetail(id);
    }
}
