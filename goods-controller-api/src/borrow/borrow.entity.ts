import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('borrow')
export class BorrowEntity{
    @PrimaryGeneratedColumn('increment')
    borrow_id:number;

    @CreateDateColumn()
    borrow_date:Date;
    
    @CreateDateColumn()
    returning_date:Date;
}