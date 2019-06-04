import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller()
export class UserController {
    constructor(
        private userService:UserService
    ){}

    @Get('showAllUsers')
    showAllUsers(){
        return this.userService.showAllUsers();
    }

    @Post('Login')
    Login(@Body() data:UserDTO){
        return this.userService.login(data);
    }

    @Post('SignUp')
    SignUp(@Body() data:UserDTO){
        return this.userService.signup(data);
    }

    
}
