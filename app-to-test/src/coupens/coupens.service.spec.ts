import { Test, TestingModule } from '@nestjs/testing';
import { CoupensService } from './coupens.service';

describe('CoupensService', () => {
  let service: CoupensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoupensService],
    }).compile();

    service = module.get<CoupensService>(CoupensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
