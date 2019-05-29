import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid') 
    user_id:string;

    @Column('text')
    username:string;

    @Column('text')
    password:string;

    @Column('text')
    given_name:string;

    @CreateDateColumn()
    birthday:Date;

    @Column('text')
    tel:string;

    @Column('text')
    address:string;

    @Column('text')
    citizen_id:string;

    @Column('text')
    department:string;
}