import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import {ProductTypeEntity} from '../product_type/product_type.entity'
import { BrandEntity } from 'src/brand/brand.entity';

@Entity('product')
export class ProductEntity{
    @PrimaryGeneratedColumn('uuid') 
    product_id:string;

    @Column('text')
    product_name:string;

    @Column('text')
    area:string;

    @Column('int')
    amount:number;

    @ManyToOne(type=>ProductTypeEntity,prType=>prType.product) 
    prType: ProductTypeEntity //define the entity for relationship
    @ManyToOne(type=>BrandEntity,prBrand=>prBrand.product)
    prBrand: BrandEntity 

}