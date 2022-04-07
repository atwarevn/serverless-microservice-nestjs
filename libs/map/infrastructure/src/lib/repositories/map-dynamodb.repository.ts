import { MapRepository } from '@src/map/core/repositories';
import { Observable } from 'rxjs';
import { MapEntity } from '@src/map/core/domain';
import { DynamodbWrapper } from '@src/shared/database/dynamodb';
import { Inject } from '@nestjs/common';

export class MapDynamoDbRepository implements MapRepository {
  constructor(
    @Inject('mapModel') private readonly mapDynamo: DynamodbWrapper<MapEntity>
  ) {
    this.mapDynamo.init('local-map');
  }

  get(): Observable<MapEntity> {
    return this.mapDynamo.get({ id: 'tien' });
  }
}
