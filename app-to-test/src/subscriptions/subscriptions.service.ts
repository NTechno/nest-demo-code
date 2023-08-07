import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import {
  Subscription,
  SubscriptionDocument,
} from '../schemas/subscription.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private subscriptionModel: Model<SubscriptionDocument>,
  ) {
    console.log('subscription service!!');
  }

  create(createSubscriptionDto: CreateSubscriptionDto) {
    return 'This action adds a new subscription';
  }

  findAll() {
    console.log('subscription service!!');
    return this.subscriptionModel.find().exec();
  }

  findOne(id: string) {
    console.log(`This action returns a #${id} subscription`);
    return this.subscriptionModel.findById(id).exec();
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }

  paymentProcess(createPaymentDto: any) {
    console.log('payment process service', createPaymentDto);
  }
}
