import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './order.dto';

@Controller('order')
export class OrderController {
    constructor(
        private orderService:OrderService
    ){}

    @Get()
    allOrder(){
        return this.orderService.showAllOrder();
    }

    @Post()
    createOrder(@Body() data:OrderDTO){
        return this.orderService.addOrder(data);
    }

    @Get(':id')
    showOrder(@Param('id') id:string) {
        return this.orderService.orderWithId(id);
    }

    @Put(':id')
    updateOrder(@Param('id') id:string,@Body() data:Partial<OrderDTO>){
        return this.orderService.update(id,data);
    }

    @Delete(':id')
    deleteOrder(@Param('id') id:string){
        return this.orderService.delete(id);
    }
}
