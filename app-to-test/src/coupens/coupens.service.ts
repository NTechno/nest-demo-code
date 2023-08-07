import { Injectable } from '@nestjs/common';
import { CreateCoupenDto } from './dto/create-coupen.dto';
import { UpdateCoupenDto } from './dto/update-coupen.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Coupens,
  CoupensDocument
} from '../schemas/coupens.schema';

@Injectable()
export class CoupensService {
  constructor(
    @InjectModel(Coupens.name) private coupenModel: Model<CoupensDocument>,
  ) {
    console.log('into the sevice coupen!!!');
  }

  create(createCoupenDto: CreateCoupenDto) {
    console.log('This action adds a new coupen : ', createCoupenDto);
    var coupen = new this.coupenModel(createCoupenDto);
    return coupen.save();
  }

  findAll() {
    console.log(`This action returns all coupens`);
    var data = this.coupenModel.find().exec();
    return data;
  }

  findOne(id: string) {
    console.log(`This action returns a #${id} coupen`);
    var data = this.coupenModel.findById(id).exec();
    console.log('find coupen!!', data);
    return data;
  }

  update(id: number, updateCoupenDto: UpdateCoupenDto) {
    console.log(`This action updates a #${id} coupen`);
    this.coupenModel.findByIdAndUpdate(id, updateCoupenDto, (val, err) => {
      console.log('into the error , user', val, err);
      if (!err) {
        return val;
      }
    });
  }

  remove(id: number) {
    console.log(`This action removes a #${id} coupen`);
    this.coupenModel.findByIdAndRemove(id, (val, err) => {
      console.log("into the remove coupen" , val, err);
      if (!err) {
        return val;
      }
    });
  }
}
