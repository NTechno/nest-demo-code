import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Controller('')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {
    console.log('subscriptin controller');
  }

  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    console.log('subscripion create!!!');
    return this.subscriptionsService.create(createSubscriptionDto);
  }

  @Get()
  findAll() {
    console.log('into find all subscriptionssss');
    return this.subscriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('into find one!!!' , id);
    return this.subscriptionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ) {
    return this.subscriptionsService.update(+id, updateSubscriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionsService.remove(+id);
  }

  @Post('process')
  paymentProcess(@Body() createPaymentDto: any) {
    console.log('create payment for pament');
    return this.subscriptionsService.paymentProcess(createPaymentDto);
  }
}
