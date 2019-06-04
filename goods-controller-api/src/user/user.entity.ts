import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, BeforeInsert } from 'typeorm'
import { BranchEntity } from 'src/branch/branch.entity';
import { async } from 'rxjs/internal/scheduler/async';
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { UserRO } from './user.dto';
import { Logger } from '@nestjs/common';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({
        type: 'text',
        unique: true
    })
    username: string;

    @Column('text')
    password: string;

    @Column('text')
    given_name: string;

    @Column('text')
    birthday: string;

    @Column('text')
    tel: string;

    @Column('text')
    address: string;

    @Column('text')
    citizen_id: string;

    @Column('text')
    department: string;

    // @Column('int')
    // branchBranchId: number;
    // @ManyToOne(type => BranchEntity, (branch: BranchEntity) => branch.user)
    // branch: BranchEntity; //define the entity for relationship
    

    //method
    @BeforeInsert()
    async hashPassword() { //hash the password before insert to db
        this.password = await bcrypt.hash(this.password, 10);
    }

    toResponseObject(showToken: boolean=true): UserRO { //what will go back to client (no password)
        const { user_id, username, given_name, birthday, tel, address, citizen_id, department,token } = this;
        const responseObject: any = { user_id, username, given_name, birthday, tel, address, citizen_id, department };
        if(showToken){
            responseObject.token = token;
        }
        return responseObject;
    }

    async comparePassword(attemp: string) {
        return await bcrypt.compare(attemp, this.password);
    }

    private get token() {
        const { user_id, username } = this;
        return jwt.sign(
            {
                user_id,
                username
            },
            'ThisIsASecretKey',
            { expiresIn: '60d' }
        )
        
    }

}