import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDTO } from './order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private orderRepository:Repository<OrderEntity>
    ){}

    async showAllOrder(){
        return await this.orderRepository.find();
    }

    async addOrder(data:OrderDTO){
        const order = await this.orderRepository.create(data);
        await this.orderRepository.save(order);
        return order;
    }

    async orderWithId(id:string){
        return await this.orderRepository.findOne({where:{id}});
    }

    async update(id:string, data:Partial<OrderDTO>){
        await this.orderRepository.update({id},data);
        return await this.orderRepository.findOne();
    }

    async delete(id:string){
        await this.orderRepository.delete({id});
        return {deleted:true};
    }
}
