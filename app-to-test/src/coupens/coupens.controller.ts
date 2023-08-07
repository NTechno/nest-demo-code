import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoupensService } from './coupens.service';
import { CreateCoupenDto } from './dto/create-coupen.dto';
import { UpdateCoupenDto } from './dto/update-coupen.dto';

@Controller('coupens')
export class CoupensController {
  constructor(private readonly coupensService: CoupensService) {
    console.log("coupens controllsr",coupensService);
  }

  @Post()
  create(@Body() createCoupenDto: CreateCoupenDto) {
    return this.coupensService.create(createCoupenDto);
  }

  @Get()
  findAll() {
    return this.coupensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log("find coupen controller" , id);
    return this.coupensService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoupenDto: UpdateCoupenDto) {
    console.log("coupen controller" , id);
    return this.coupensService.update(+id, updateCoupenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coupensService.remove(+id);
  }
}
