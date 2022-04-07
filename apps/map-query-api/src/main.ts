import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app/app.module';
import { MapQueryEnvironmentVariables } from './environments/environment.common';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  const configService =
    app.get<ConfigService<MapQueryEnvironmentVariables>>(ConfigService);
  app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'));
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: unknown,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
