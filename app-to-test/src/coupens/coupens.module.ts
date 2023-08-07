import { Module } from '@nestjs/common';
import { CoupensService } from './coupens.service';
import { CoupensController } from './coupens.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coupens, CoupensSchema } from 'src/schemas/coupens.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coupens.name, schema: CoupensSchema }]),
  ],
  controllers: [CoupensController],
  providers: [CoupensService],
})
export class CoupensModule {}
