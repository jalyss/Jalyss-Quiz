import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors:true});
  app.useStaticAssets('upload', {prefix: '/upload'});
 
  const config = new DocumentBuilder()
  .setTitle('Jalyss-Quiz')
  .setDescription('The Jalyss-Quiz API documentation')
  .setVersion('1.0')
  .addApiKey({type:'apiKey',name:'Authorization',in:'header'},'apiKey')
  .addTag('Jalyss quiz')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
