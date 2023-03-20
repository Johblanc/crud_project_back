import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Controller('products') 
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const newProduct = await this.productsService.create(createProductDto)
    return {
      message : "Création d'un nouveau produit",
      data : newProduct
    }
  }

  @Get()
  async findAll() {
    return {
      message : "Récupération de tous les produits",
      data :await this.productsService.findAll()
    }
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productsService.update(+id, updateProductDto)

    if (product === null) {
      throw new NotFoundException("Il n'existe pas de produit pour cette identifiant")
    }
    return {
      message : "Modification d'un produit",
      data : product
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await this.productsService.remove(+id)

    if (product === null) {
      throw new NotFoundException("Il n'existe pas de produit pour cette identifiant")
    }
    return {
      message : "Suppression d'un produit",
      data : product
    }
  }
}
