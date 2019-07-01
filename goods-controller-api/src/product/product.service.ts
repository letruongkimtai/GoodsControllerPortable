import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository,getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from './product.entity';
import { ProductDTO, } from './product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository:Repository<ProductEntity>,
    ){}

    //Xem hết hàng.
    async showAllProduct(){
        return await this.productRepository.find({relations:['prType','prBrand','storage']});
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
       const products = await getRepository(ProductEntity).createQueryBuilder("product").where("product.amount < 10").getMany();
       return products;
    }

    //Search
    // async search(product_name:string){
    //     const product = await getRepository(ProductEntity).createQueryBuilder("product").where("product.product_name =: name",{name:product_name}).getOne();
    //     if(product != null){
    //         return product
    //    
    //     else{
    //         throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    //     }
    // }

    //Xem hàng theo ID
    async productWithID(product_id: string){
        return await this.productRepository.findOne(product_id,{relations:['prType','prBrand','storage']})
    }

    //Update hàng.
    async updateProduct(product_id: string, data:Partial<ProductDTO>){
        await this.productRepository.update({product_id},data);
        return await this.productRepository.findOne({product_id});
    }

    //Xóa hàng.
    async deleteProduct(product_id:string){
        await this.productRepository.delete({product_id});
        return {deleted:true};
    }
}
