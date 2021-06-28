import { Injectable } from '@nestjs/common';
import { FileInfo } from 'basic-ftp';
import { FtpService } from '../../src';

@Injectable()
export class ServiceTest {
  constructor(private readonly ftpService: FtpService) {}

  async list(path?: string): Promise<FileInfo[]> {
    return await this.ftpService.list(path);
  }
}
