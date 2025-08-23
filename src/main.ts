import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  // Enable validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Enable CORS
  app.enableCors();

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Gas Station Management API')
    .setDescription('Complete API for managing gas station operations')
    .setVersion('1.0')
    .addTag('tanks', 'Tank management operations')
    .addTag('products', 'Product inventory operations')
    .addTag('suppliers', 'Supplier management operations')
    .addTag('purchasing', 'Purchase order operations')
    .addTag('users', 'User management operations')
    .addTag('sales', 'Sales transaction operations')
    .addTag('clients', 'Client account operations')
    .addTag('reports', 'Reporting operations')
    .addTag('maintenance', 'Maintenance operations')
    .addTag('hr', 'Human resources operations')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log('🚀 GSM API is running on http://localhost:3000');
  console.log('📚 API Documentation available at http://localhost:3000/api');
}
bootstrap();