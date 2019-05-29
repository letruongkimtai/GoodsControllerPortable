import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { ProductEntity } from 'src/product/product.entity';

@Entity('brand')
export class BrandEntity{
    @PrimaryGeneratedColumn('increment')
    brand_id:number;

    @Column('text')
    brand_name:string;

    @OneToMany(type=>ProductEntity,product=>product.prBrand)
    product:ProductEntity
}