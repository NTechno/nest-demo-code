import { PartialType } from '@nestjs/mapped-types';
import { CreateCoupenDto } from './create-coupen.dto';

export class UpdateCoupenDto extends PartialType(CreateCoupenDto) {}
