import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MapServicesModule } from '@src/map/services';
import { commonConfigModuleOptions } from '@src/shared/environment';
import { mapQueryEnvironmentVariables } from '../environments/environment';
import { AppController } from './app.controller';

@Module({
  imports: [
    MapServicesModule,
    ConfigModule.forRoot({
      ...commonConfigModuleOptions,
      load: [() => mapQueryEnvironmentVariables],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
