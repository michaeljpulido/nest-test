import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Nest Test API"', () => {
      expect(appController.root()).toBe('Nest Test API');
    });
  });

  describe('health', () => {
    it('should return { status: 200 }', () => {
      expect(appController.health()).toEqual({ status: 200 });
    });
  });
});
