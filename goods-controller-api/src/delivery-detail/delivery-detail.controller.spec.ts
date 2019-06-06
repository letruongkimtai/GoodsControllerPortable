import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryDetailController } from './delivery-detail.controller';

describe('DeliveryDetail Controller', () => {
  let controller: DeliveryDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryDetailController],
    }).compile();

    controller = module.get<DeliveryDetailController>(DeliveryDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
