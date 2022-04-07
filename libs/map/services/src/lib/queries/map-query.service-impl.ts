import { Injectable } from '@nestjs/common';
import { MapRepository } from '@src/map/core/repositories';
import { MapModel, MapQueryService } from '@src/map/core/services';
import { map, Observable } from 'rxjs';

@Injectable()
export class MapQueryServiceImpl implements MapQueryService {
  constructor(private readonly mapRepository: MapRepository) {}

  get(): Observable<MapModel> {
    return this.mapRepository
      .get()
      .pipe(map((mapEntity) => ({ id: mapEntity.id })));
  }
}
