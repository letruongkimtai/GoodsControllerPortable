import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm'
import { ProductEntity } from 'src/product/product.entity';
import { DeliveryEntity } from 'src/delivery/delivery.entity';

@Entity('delivery_detail')
export class DeliveryDetailEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @ManyToOne(type=>DeliveryEntity,(delivery:DeliveryEntity)=>delivery.delivery_detail)
    delivery:DeliveryEntity;
    @Column('uuid')
    deliveryId:string;

    @ManyToOne(type=>ProductEntity,(product:ProductEntity)=>product.delivery_detail)
    product:ProductEntity;
    @Column('uuid')
    productProductId:string;

    @Column('int')
    quantity:number;

    @Column('text')
    quality:string;
}