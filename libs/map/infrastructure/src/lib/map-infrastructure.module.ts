import { Module } from '@nestjs/common';
import { MapRepository } from '@src/map/core/repositories';
import { MapDynamoDbRepository } from './repositories/map-dynamodb.repository';
import { SharedDatabaseDynamodbModule } from '@src/shared/database/dynamodb';
import { MapEntity } from '@src/map/core/domain';

@Module({
  controllers: [],
  providers: [{ provide: MapRepository, useClass: MapDynamoDbRepository }],
  exports: [{ provide: MapRepository, useClass: MapDynamoDbRepository }],
  imports: [SharedDatabaseDynamodbModule.forFeature<MapEntity>('map')],
})
export class MapInfrastructureModule {}
