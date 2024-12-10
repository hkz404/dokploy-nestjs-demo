import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const config = app.get(ConfigService);
  await app.listen(config.get('PORT2', 7003));
  console.log(`Application is running on: ${await app.getUrl()}\n`);
}

process.on('unhandledRejection', (reason) => {
  console.log('🔥🔥🔥', reason);
});

bootstrap(); 