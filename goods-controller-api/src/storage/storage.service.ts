import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StorageEntity } from './storage.entity';
import { Repository } from 'typeorm';
import { storageDTO } from './storage.DTO';

@Injectable()
export class StorageService {
    constructor(
        @InjectRepository(StorageEntity)
        private storageRepository: Repository<StorageEntity>
    ){}

    async showAllStorages(){
        return await this.storageRepository.find();
    }
    
    async createStorage(data:storageDTO){
        const storage = await this.storageRepository.create(data);
        await this.storageRepository.save(storage);
        return storage;
    }

    async updateStorage(id:number,data:storageDTO){
        await this.storageRepository.update({id},data);
        return await this.storageRepository.findOne();
    }

    async deleteStorage(id:number){
        await this.storageRepository.delete({id});
        return {deleted:true};
    }
}
