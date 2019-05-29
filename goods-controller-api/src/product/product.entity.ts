import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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
}