import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import {ProductEntity} from '../product/product.entity'

@Entity('product_type')
export class ProductTypeEntity{
    @PrimaryGeneratedColumn('increment') 
    type_id:number;
    
    @Column('text')
    type_name:string;

    @OneToMany(type=>ProductEntity,product=>product.prType) //call the enitty for relationship
    product:ProductEntity //define for oposite entity
}