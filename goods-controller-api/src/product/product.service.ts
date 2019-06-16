import { Injectable } from '@nestjs/common';
import { Repository, createQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from './product.entity';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository:Repository<ProductEntity>,
    ){}

    //Xem hết hàng.
    async showAllProduct(){
        return await this.productRepository.find({relations:['prType','prBrand']});
    }

    //Tạo hàng mới.
    async createProduct(data: ProductDTO){
        const product = await this.productRepository.create(data);
        console.log(data);
        await this.productRepository.save(product);
        return product
    }

    //Xem hang gan het.
    async outOfStock(){
       const products = await this.productRepository.createQueryBuilder()
       .select("product").from(ProductEntity,"product").where("product.amount < limit",{limit:30});
       return products;
    }

    //Xem hàng theo ID
    async productWithID(product_id: string){
        return await this.productRepository.findOne({where: {product_id}})
    }

    //Update hàng.
    async updateProduct(product_id: string, data:Partial<ProductDTO>){
        await this.productRepository.update({product_id},data);
        return await this.productRepository.findOne();
    }

    //Xóa hàng.
    async deleteProduct(product_id:string){
        await this.productRepository.delete({product_id});
        return {deleted:true};
    }
}
