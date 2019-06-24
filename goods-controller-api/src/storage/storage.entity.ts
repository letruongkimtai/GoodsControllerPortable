import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany } from 'typeorm'
import { ProductEntity } from 'src/product/product.entity';

@Entity('storage')
export class StorageEntity{
    @PrimaryGeneratedColumn('increment') 
    id:number;

    @Column('text')
    name:string;

    @OneToMany(type=>ProductEntity,product=>product.storage)
    product:ProductEntity

}