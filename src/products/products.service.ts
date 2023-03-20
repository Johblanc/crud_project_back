import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) 
  {
    return await Product.create({...createProductDto}).save();
  }

  async findAll() 
  {
    return await Product.find();
  }


  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await Product.findOneBy({id});

    if (product){
      if (updateProductDto.nom) product.nom = updateProductDto.nom ;
      if (updateProductDto.prix) product.prix = updateProductDto.prix ;
      if (updateProductDto.quantite) product.quantite = updateProductDto.quantite ;
      await product.save()
    }
    return product;
  }

  async remove(id: number) {
    const product = await Product.findOneBy({id});

    if (product){
      await product.remove()
    }
    return product;
  }
}
