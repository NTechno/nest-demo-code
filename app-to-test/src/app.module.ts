import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductModule } from './product/product.module';
import { CoupensModule } from './coupens/coupens.module';
import { TransactionsModule } from './transactions/transactions.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { CategoryModule } from './category/category.module';
import { StripeModule } from 'nestjs-stripe';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/e-com'),
    StripeModule.forRoot({
      apiKey:'pk_test_51MESNtSD4zuvZ5Wu7XG7qjr8gh0uzvr9S2oj0v6S36oPc32RkRpuPPtqIp29QehoKaQFCacdEKOS3hqyrSvTsYK400z9k2S5j5',
      appVersion:"2022-11-15"
    }),
    UsersModule,
    RouterModule.register([{ path: 'users', module: UsersModule }]),
    ProductModule,
    CoupensModule,
    TransactionsModule,
    SubscriptionsModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
