import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoupensDocument = HydratedDocument<Coupens>;

@Schema()
export class Coupens {
  @Prop()
  name: string;

  @Prop()
  discount: string;

  @Prop()
  code: string;

  @Prop()
  available: string;
}

export const CoupensSchema = SchemaFactory.createForClass(Coupens);
