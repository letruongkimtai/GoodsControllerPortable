import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ProductTypeEntity } from '../product-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductTypeDTO } from './product-type.dto';

@Injectable()
export class ProductTypeService {

    //ALL SERVICES GO HERE


    //add dependency injection for typeorm repository
    constructor(
        @InjectRepository(ProductTypeEntity)  //inject product type repo
        private typeRepository: Repository<ProductTypeEntity> //define repository
    ) { }


    async showAll() {
        return await this.typeRepository.find();
    }

    async create(data:ProductTypeDTO) {
        const type = await this.typeRepository.create(data);
        await this.typeRepository.save(type)
        return type;
    }

    async showType(type_id: number) {
        return await this.typeRepository.findOne({ where: { type_id } });
    }

    async update(type_id: number, data:Partial<ProductTypeDTO>) { //import props exactly like what written in entity
        await this.typeRepository.update({type_id}, data);
        return await this.typeRepository.findOne({type_id});
    }

    async delete(type_id: number) {
        await this.typeRepository.delete({type_id});
        return { deleted: true };
    }
}
