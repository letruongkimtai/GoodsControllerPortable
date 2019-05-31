import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BranchEntity } from './branch.entity';
import { Repository } from 'typeorm';
import { branchDTO } from './branch.dto';

@Injectable()
export class BranchService {
    constructor(
        @InjectRepository(BranchEntity)
        private branchRepository:Repository<BranchEntity>
    ){}

    async showAllBranches(){
        return await this.branchRepository.find();
    }

    async createBranch(data:branchDTO){
        const branch = await this.branchRepository.create(data);
        await this.branchRepository.save(branch);
        return branch;
    }

    async showBranch(branch_id:number){
        return await this.branchRepository.findOne({where:{branch_id}})
    }

    async update(branch_id:number,data:Partial<branchDTO>){
        await this.branchRepository.update({branch_id},data);
        return await this.branchRepository.findOne({branch_id});
    }

    async delete(branch_id:number){
        await this.branchRepository.delete({branch_id});
        return {deleted:true};
    }
}
