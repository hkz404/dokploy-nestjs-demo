import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  await app.listen(config.get('PORT', 3002));

  console.log(`Application is running on: ${await app.getUrl()}\n`);
}

process.on('unhandledRejection', (reason) => {
  console.log('🔥🔥🔥', reason);
});

bootstrap(); 