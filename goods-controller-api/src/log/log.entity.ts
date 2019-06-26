import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm'

@Entity('log')
export class LogEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @CreateDateColumn()
    created:Date;

    @Column()
    product_name:string;

    @Column()
    amount:number;

    @Column()
    user:string;

}