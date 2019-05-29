import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('order')
export class ProductEntity{
    @PrimaryGeneratedColumn('uuid')
    order_id:string;

    @CreateDateColumn()
    created_date:Date;
}