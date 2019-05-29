import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('product_type')
export class ProductTypeEntity{
    @PrimaryGeneratedColumn('increment') 
    type_id:number;
    
    @Column('text')
    type_name:string;
}