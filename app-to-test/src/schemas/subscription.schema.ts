import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubscriptionDocument = HydratedDocument<Subscription>;

@Schema()
export class Subscription {
  @Prop()
  user: string;

  @Prop()
  product: string;

  @Prop()
  coupen: string;

  @Prop()
  price: string;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
