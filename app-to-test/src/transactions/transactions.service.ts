import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Transaction,
  TransactionDocument,
} from '../schemas/transaction.schema';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {
    console.log('trnsaction service!!');
  }
  create(createTransactionDto: CreateTransactionDto) {
    const saveData = new this.transactionModel(createTransactionDto);
    console.log('This action adds a new transaction');
    return saveData.save();
  }

  findAll() {
    console.log(`This action returns all transactions`);
    return this.transactionModel.find().exec();
  }

  findOne(id: number) {
    console.log(`This action returns a #${id} transaction`);
    return this.transactionModel.findById(id).exec();
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
