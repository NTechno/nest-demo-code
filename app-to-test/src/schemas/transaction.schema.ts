import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop()
  product: string;

  @Prop()
  price: string;

  @Prop()
  coupen: number;

  @Prop()
  payable: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
