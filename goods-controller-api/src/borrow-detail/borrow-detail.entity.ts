import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm'
import { ProductEntity } from 'src/product/product.entity';
import { BorrowEntity } from 'src/borrow/borrow.entity';
import { UserEntity } from 'src/user/user.entity';

@Entity('borrow_detail')
export class BorrowDetailEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @ManyToOne(type=>BorrowEntity,(borrow:BorrowEntity)=>borrow.borrow_dt)
    borrow:BorrowEntity;
    @Column('uuid')
    borrowId:string;

    @ManyToOne(type=>ProductEntity,(product:ProductEntity)=>product.borrowdt)
    product:ProductEntity;
    @Column('uuid')
    productProductId:string;

    @Column('int')
    quantity:number;
}