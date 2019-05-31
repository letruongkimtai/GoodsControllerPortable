import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('branch')
export class BranchEntity{
    @PrimaryGeneratedColumn('increment')
    branch_id:number;

    @Column('text')
    branch_name:string;

    @Column('text')
    branch_address:string;

    @Column('text')
    district_province:string;
}