import { MapModel } from '../models/map.model';
import { Observable } from 'rxjs';

export abstract class MapQueryService {
  abstract get(): Observable<MapModel>;
}
