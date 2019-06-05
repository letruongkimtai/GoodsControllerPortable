import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne,} from 'typeorm'
import { UserEntity } from 'src/user/user.entity';
import { DeliveryDetailEntity } from 'src/delivery-detail/delivery-detail.entity';

@Entity('delivery')
export class DeliveryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @CreateDateColumn()
    created:Date;

    @Column('text')
    status:string;

    @ManyToOne(type=>UserEntity,(user:UserEntity)=>user.delivery)
    user:UserEntity;
    @Column('uuid')
    userUserId:string;

    @OneToMany(type=>DeliveryDetailEntity,delivery_detail=>delivery_detail.delivery)
    delivery_detail:DeliveryDetailEntity[];
}