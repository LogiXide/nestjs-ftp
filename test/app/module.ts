import { Module } from '@nestjs/common';
import { FtpModule } from '../../src';
import { ServiceTest } from './service';

@Module({
  imports: [
    FtpModule.forRootFtpAsync({
      useFactory: async () => {
        return {
          host: 'test.rebex.net',
          password: 'password',
          port: 21,
          user: 'demo',
          secure: true,
        };
      },
      inject: [],
    }),
  ],
  providers: [ServiceTest],
})
export class ModuleTest {}
