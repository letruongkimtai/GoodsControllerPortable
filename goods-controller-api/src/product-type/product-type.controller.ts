import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductTypeService } from './product-type/product-type.service';
import { ProductTypeDTO } from './product-type/product-type.dto';

@Controller('product-type')
export class ProductTypeController {

    //Routes HERE...!!!!

    constructor(private TypeService:ProductTypeService){

    }

    //show all product type
    @Get()
    showAllType() { 
        return this.TypeService.showAll();
    }

    //create a product type
    @Post()
    createType(@Body() data: ProductTypeDTO) { //add body decorator for body interact
        return this.TypeService.create(data);
    }

    //show product type with type id
    @Get(':id')
    typeWithId(@Param('id') id:number) { //add param decorator for giving param in service
        return this.TypeService.showType(id);
     }

    //update a product type
    @Put(':id')
    updateType(@Param('id') id:number,@Body() data:Partial<ProductTypeDTO>) {
        return this.TypeService.update(id,data);
     }

    //delete a product type
    @Delete(':id')
    deleteType( @Param('id') id:number) {
        return this.TypeService.delete(id);
    }
}
