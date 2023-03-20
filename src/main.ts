import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './errors/AllExceptionsFilter';
import { ResponserInterceptor } from './interceptors/responser.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Iconotheque')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponserInterceptor());

  await app.listen(8000);
}
bootstrap();
