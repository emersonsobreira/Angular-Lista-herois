import { Test, TestingModule } from '@nestjs/testing';
import { HeroisController } from './herois.controller';
import { HeroisService } from './herois.service';

describe('HeroisController', () => {
  let controller: HeroisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroisController],
      providers: [HeroisService],
    }).compile();

    controller = module.get<HeroisController>(HeroisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
