import { INestApplicationContext, Type } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { FileInfo } from 'basic-ftp';
import 'jest-extended';
import { ModuleTest } from './app/module';
import { ServiceTest } from './app/service';

const testCommands = (moduleType: Type<ModuleTest>): void => {
  let app: INestApplicationContext;
  let serviceTest: ServiceTest;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [moduleType],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    serviceTest = app.get<ServiceTest>(ServiceTest);
  });

  describe('#list', () => {
    it('should display list', async () => {
      const actual: FileInfo[] = await serviceTest.list();
      expect(actual).toBeArray();
    });
  });
};

describe('ModuleTest', () => {
  testCommands(ModuleTest);
});
