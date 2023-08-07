import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  Product,
  ProductDocument,
  ProductSchema,
} from '../schemas/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  // constructor(@InjectModel(Product.name) private ProductSchema){}
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    console.log('create product...', createProductDto);
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  findAll() {
    console.log('itoot find product');
    return this.productModel.find().exec();
  }

  findOne(id: string) {
    console.log('This action returns a #${id} product');
    return this.productModel.findById(id).exec();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log('This action updates a #${id} product');
    return this.productModel.findByIdAndUpdate();
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
