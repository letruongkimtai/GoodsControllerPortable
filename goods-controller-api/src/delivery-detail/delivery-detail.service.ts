import { Injectable } from '@nestjs/common';
import { DeliveryDetailEntity } from './delivery-detail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryDetailDTO } from './delivery-detail.dto';

@Injectable()
export class DeliveryDetailService {
    constructor(
        @InjectRepository(DeliveryDetailEntity)
        private orderDetailRepository: Repository<DeliveryDetailEntity>
    ) { }

    async showAllDetail() {
        return await this.orderDetailRepository.find({relations:['delivery','product']});
    }

    async addDetail(data: DeliveryDetailDTO) {
        const detail = await this.orderDetailRepository.create(data);
        await this.orderDetailRepository.save(detail);
        return await this.orderDetailRepository.find(data);
    } 

    async showDetail(deliveryId: string) {
        return await this.orderDetailRepository.find({relations:['product'],where:{deliveryId}});
    }

    async deleteDetail(Id: string) {
        await this.orderDetailRepository.find({ deliveryId: Id });
        return { deleted: true };
    }
}
