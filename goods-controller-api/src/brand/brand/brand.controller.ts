import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandDTO } from '../brand.dto';

@Controller('brand')
export class BrandController {

    constructor(private brandService:BrandService){

    }

    @Get()
    showAllBrand(){
        return this.brandService.showAllBrand();
    }

    @Post()
    brandSignUp(@Body() data:BrandDTO){ //sử dụng decorator body để xác nhận data truyền vào là ở body
        return this.brandService.brandSignUp(data);
    }

    @Get(':id') //xác định có param thì ở dưới cũng truyền @Param
    showBrand(@Param('id') id:number){ //add @Param decorator
        return this.brandService.brandWithID(id);
    }

    @Put(':id')
    updateBrand(@Param('id') id:number,@Body() data:Partial<BrandDTO>){
        return this.brandService.updateBrand(id,data);
    }

    @Delete(':id')
    deleteBrand(@Param('id') id:number){
        return this.brandService.deleteBrand(id);
    }
}
