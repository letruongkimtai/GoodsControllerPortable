import { Injectable } from '@nestjs/common';
import { DeliveryEntity } from './delivery.entity';
import { Repository, getRepository,createQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryDTO } from './delivery.dto';

@Injectable()
export class DeliveryService {
    constructor(
        @InjectRepository(DeliveryEntity)
        private DeliveryRepository:Repository<DeliveryEntity>
    ){}

    async showAll(){
        return await this.DeliveryRepository.find({relations:['user']});
    }

    async add(data:DeliveryDTO){
        const order = await this.DeliveryRepository.create(data);
        await this.DeliveryRepository.save(order);
        return order;
    }

    async deliveryWithId(id:string){
        return await this.DeliveryRepository.findOne({where:{id}});
    }

    async update(Id:string, data:Partial<DeliveryDTO>){
        await this.DeliveryRepository.update({id:Id},data);
        return await this.DeliveryRepository.findOne();
    }

    async delete(id:string){
        await this.DeliveryRepository.delete({id});
        return {deleted:true};
    }

    // async showUnconfirmed(){
    //     const status = false;
    //     const reciepts = getRepository(DeliveryEntity).createQueryBuilder("delivery").where("delivery.status := status",{status:status}).getMany();
    //     return reciepts;
    // }
}
