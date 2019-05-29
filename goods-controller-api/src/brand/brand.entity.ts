import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('brand')
export class BrandEntity{
    @PrimaryGeneratedColumn('increment')
    brand_id:number;

    @Column('text')
    brand_name:string;
}