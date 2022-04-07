import { MapEntity } from '@src/map/core/domain';
import { Observable } from 'rxjs';

export abstract class MapRepository {
  abstract get(): Observable<MapEntity>;
}
