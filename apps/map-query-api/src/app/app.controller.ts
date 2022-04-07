import { Controller, Get, Headers } from '@nestjs/common';
import { MapQueryService } from '@src/map/core/services';
import { ConfigService } from '@nestjs/config';
import { MapQueryEnvironmentVariables } from '../environments/environment.common';
@Controller()
export class AppController {
  constructor(
    private readonly mapQueryService: MapQueryService,
    private readonly configService: ConfigService<MapQueryEnvironmentVariables>
  ) {}

  @Get()
  getData(@Headers('x-kddi-access-token') token: string) {
    console.log("Config", this.configService.get("ENV"))
    console.log('Token', token);
    return this.mapQueryService.get();
  }

  @Get('/todo')
  getTodo() {
    return { message: 'this is todo list' };
  }
}
