import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderDetailEntity } from './order-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetailDTO } from './order-detail.dto';

@Injectable()
export class OrderDetailService {
    constructor(
        @InjectRepository(OrderDetailEntity)
        private orderDetailRepository: Repository<OrderDetailEntity>
    ) { }

    async showAllOrderDetail() {
        return await this.orderDetailRepository.find({relations:['order','product']});
    }

    async addDetail(data: OrderDetailDTO) {
        const detail = await this.orderDetailRepository.create(data);
        await this.orderDetailRepository.save(detail);
        return await this.orderDetailRepository.find(data);
    }

    async showOrderDetail(Id: string) {
        return await this.orderDetailRepository.find({ orderId: Id });
    }

    async deleteDetail(Id: string) {
        await this.orderDetailRepository.find({ orderId: Id });
        return { deleted: true };
    }
}
