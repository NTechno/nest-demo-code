import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {
    console.log('category services');
  }

  create(createCategoryDto: CreateCategoryDto) {
    console.log('This action adds a new category', createCategoryDto);
    var data = new this.categoryModel(createCategoryDto);
    return data.save();
  }

  findAll() {
    console.log(`This action returns all category`);
    return this.categoryModel.find();
  }

  findOne(id: string) {
    console.log(`This action returns a #${id} category`);
    return this.categoryModel.findById(id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
