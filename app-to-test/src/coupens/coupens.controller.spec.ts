import { Test, TestingModule } from '@nestjs/testing';
import { CoupensController } from './coupens.controller';
import { CoupensService } from './coupens.service';

describe('CoupensController', () => {
  let controller: CoupensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoupensController],
      providers: [CoupensService],
    }).compile();

    controller = module.get<CoupensController>(CoupensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
