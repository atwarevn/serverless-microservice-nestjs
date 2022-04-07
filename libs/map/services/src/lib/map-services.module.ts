import { Module } from '@nestjs/common';
import { MapQueryService } from '@src/map/core/services';
import { MapInfrastructureModule } from '@src/map/infrastructure';
import { MapQueryServiceImpl } from './queries/map-query.service-impl';

@Module({
  imports: [MapInfrastructureModule],
  controllers: [],
  providers: [{ provide: MapQueryService, useClass: MapQueryServiceImpl }],
  exports: [{ provide: MapQueryService, useClass: MapQueryServiceImpl }],
})
export class MapServicesModule {}
