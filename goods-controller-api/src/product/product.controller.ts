import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO, } from './product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Get()
    showAllProducts(){
        return this.productService.showAllProduct();
    }

    @Post()
    addProduct(@Body() data:ProductDTO){ //sử dụng decorator body để xác nhận data truyền vào là ở body
        return this.productService.createProduct(data);
    }

    @Get('/OutOfStock')
    outOfStock(){
        return this.productService.outOfStock()
    }

    // @Post('/Search')
    // SearchProduct(@Body() name:string){
    //     return this.productService.search(name);
    // }

    @Get(':id') //xác định có param thì ở dưới cũng truyền @Param
    showProduct(@Param('id') id:string){ //add @Param decorator
        return this.productService.productWithID(id);
    }

    @Put(':id')
    updateProduct(@Param('id') id:string,@Body() data:Partial<ProductDTO>){
        return this.productService.updateProduct(id,data);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id:string){
        return this.productService.deleteProduct(id);
    }
}
