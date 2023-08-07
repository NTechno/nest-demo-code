import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  manufactureYear: number;

  @Prop()
  price: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
