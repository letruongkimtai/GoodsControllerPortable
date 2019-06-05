import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToOne } from 'typeorm'
import { UserEntity } from 'src/user/user.entity';
import { ProductEntity } from 'src/product/product.entity';
import { OrderEntity } from 'src/order/order.entity';

@Entity('order_detail')
export class OrderDetailEntity{
    @PrimaryGeneratedColumn('increment')
    id:string;

    @ManyToOne(type=>ProductEntity,(product:ProductEntity)=>product.detail)
    product:ProductEntity
    @Column('uuid')
    productProductId:string;

    @ManyToOne(type=>OrderEntity,(order:OrderEntity)=>order.detail)
    order:OrderEntity;
    @Column('uuid')
    orderId:string;

    @Column('int')
    quantity:number;

}