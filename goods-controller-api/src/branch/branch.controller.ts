import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BranchService } from './branch.service';
import { branchDTO } from './branch.dto';

@Controller('branch')
export class BranchController {
    constructor(
        private branchService:BranchService
    ){}

    @Get()
    branches(){
        return this.branchService.showAllBranches();
    }

    @Post()
    addBranch(@Body() data:branchDTO){
        return this.branchService.createBranch(data);
    }

    @Get(':id')
    showBranch(@Param('id') id:number){
        return this.branchService.showBranch(id);
    }

    @Put(':id')
    updateBranch(@Param('id') id:number, @Body() data:Partial<branchDTO>){
        return this.branchService.update(id,data);
    }
    
    @Delete(':id')
    deleteBranch(@Param('id') id:number){
        return this.branchService.delete(id);
    }
}
