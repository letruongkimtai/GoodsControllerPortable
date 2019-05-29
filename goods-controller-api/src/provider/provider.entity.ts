import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('provider')
export class ProviderEntity{
    @PrimaryGeneratedColumn('increment')
    provider_id:number;

    @Column('text')
    provider_name:string;

    @Column('text')
    provider_address:string;

    @Column('text')
    provider_tel:string;
}