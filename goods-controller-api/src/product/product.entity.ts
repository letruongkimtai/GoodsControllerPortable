import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import {ProductTypeEntity} from '../product-type/product-type.entity'
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

    @ManyToOne(type=>ProductTypeEntity,(prType:ProductTypeEntity) => prType.product) 
    prType: ProductTypeEntity; //define the entity for relationship
    @Column('int') prTypeTypeId: number;
    
    @ManyToOne(type=>BrandEntity,prBrand=>prBrand.product)
    prBrand: BrandEntity;
    @Column('int') prBrandBrandId: number;

}