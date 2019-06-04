import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import {UserEntity} from '../user/user.entity'

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