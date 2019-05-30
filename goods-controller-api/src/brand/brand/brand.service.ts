import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BrandEntity } from '../brand.entity';
import { BrandDTO } from '../brand.dto';

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(BrandEntity)
        private brandRepository: Repository<BrandEntity>
    ) { }

    async showAllBrand() {
        return await this.brandRepository.find();
    }

    async brandSignUp(data: BrandDTO) {
        const brand = await this.brandRepository.create(data);
        await this.brandRepository.save(brand);
        return brand;
    }

    async brandWithID(brand_id: number) {
        return await this.brandRepository.findOne({ where: { brand_id } });
    }

    async updateBrand(brand_id: number, data:Partial<BrandDTO>) { //Thêm partial để update những gì chỉnh sửa chứ không phải update tất cả
        await this.brandRepository.update({ brand_id }, data);
        return await this.brandRepository.findOne({ brand_id });
    }

    async deleteBrand(brand_id: number) {
        await this.brandRepository.delete({ brand_id });
        return { deleted: true }
    }
}
