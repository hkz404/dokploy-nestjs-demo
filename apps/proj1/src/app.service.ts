import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '你好，欢迎使用 NestJS!!';
  }
} 