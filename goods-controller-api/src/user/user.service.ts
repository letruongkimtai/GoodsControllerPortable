import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserDTO, UserRO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    async showAllUsers(): Promise<UserRO[]> {
        const users = await this.userRepository.find();
        return users.map(users => users.toResponseObject(false));
    }

    async login(data: UserDTO): Promise<UserRO> {
        const { username, password } = data;
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user || !(await user.comparePassword(password))) {
            throw new HttpException(
                'Invalid username/password',
                HttpStatus.BAD_REQUEST
            )
        }
        return user.toResponseObject();
    }

    async signup(data: UserDTO): Promise<UserRO> {
        const {username} = data;
        let user =await this.userRepository.findOne({where:{username}});
        if(user){
            throw new HttpException(
                'User already exist' , 
                HttpStatus.BAD_REQUEST
            );
        }
        user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user.toResponseObject();

    }
}
