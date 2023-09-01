import { Test, TestingModule } from '@nestjs/testing';
import { HeroisService } from './herois.service';

describe('HeroisService', () => {
  let service: HeroisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroisService],
    }).compile();

    service = module.get<HeroisService>(HeroisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
