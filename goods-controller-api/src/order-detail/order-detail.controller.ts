import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailDTO } from './order-detail.dto';

@Controller('order-detail')
export class OrderDetailController {
    constructor(
        private orderDetailService:OrderDetailService
    ){}

    @Get()
    showAllDetail(){
        return this.orderDetailService.showAllOrderDetail();
    }

    @Post()
    addOrderDetail(@Body() data:OrderDetailDTO){
        return this.orderDetailService.addDetail(data);
    }

    @Get(':id')
    showDetail(@Param() id:string){
        return this.orderDetailService.showOrderDetail(id);
    }

    @Delete(':id')
    deleteOrderDetail(@Param() id:string){
        return this.orderDetailService.deleteDetail(id);
    }
}
