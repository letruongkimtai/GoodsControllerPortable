import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, OneToOne, ManyToOne } from 'typeorm'
import { BorrowDetailEntity } from 'src/borrow-detail/borrow-detail.entity';
import { UserEntity } from 'src/user/user.entity';

@Entity('borrow')
export class BorrowEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @CreateDateColumn()
    created:Date;
    
    @CreateDateColumn()
    returned:Date;

    @Column('boolean')
    status:Boolean;

    @OneToMany(type=>BorrowDetailEntity,borrow_dt=>borrow_dt.borrow)
    borrow_dt:BorrowDetailEntity[];

    @ManyToOne(type=>UserEntity,(user:UserEntity)=>user.borrow)
    user:UserEntity;
    @Column('uuid')
    userUserId:string;
}