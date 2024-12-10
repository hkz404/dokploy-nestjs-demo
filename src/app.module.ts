import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal: true,  // 设置为全局模块
      envFilePath: '.env',  // 指定环境变量文件路径
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 