import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany } from 'typeorm'
import {ProductTypeEntity} from '../product-type/product-type.entity'
import { BrandEntity } from 'src/brand/brand.entity';
import { OrderDetailEntity } from 'src/order-detail/order-detail.entity';
import { BorrowDetailEntity } from 'src/borrow-detail/borrow-detail.entity';
import { DeliveryDetailEntity } from 'src/delivery-detail/delivery-detail.entity';
import { StorageEntity } from 'src/storage/storage.entity';

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

    @ManyToOne(type=>StorageEntity,storage=>storage.product)
    storage: StorageEntity;
    @Column('int') storageId: number;

    @OneToOne(type=>OrderDetailEntity,detail=>detail.product)
    detail:OrderDetailEntity[];

    @OneToMany(type=>BorrowDetailEntity,borrowdt=>borrowdt.product)
    borrowdt:BorrowDetailEntity[];

    @OneToMany(type=>DeliveryDetailEntity,delivery_detail=>delivery_detail.product)
    delivery_detail:DeliveryDetailEntity[];


}