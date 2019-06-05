import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm'
import { UserEntity } from 'src/user/user.entity';
import { OrderDetailEntity } from 'src/order-detail/order-detail.entity';

@Entity('order')
export class OrderEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('boolean')
    status:boolean;

    @CreateDateColumn()
    created:Date;

    @ManyToOne(type=>UserEntity,user=>user.order)
    user:UserEntity;
    @Column('uuid')
    userUserId:string;

    @OneToMany(type=>OrderDetailEntity,detail=>detail.order)
    detail:OrderDetailEntity[];
}