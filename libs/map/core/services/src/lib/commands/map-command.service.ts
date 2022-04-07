import { MapModel } from '../models/map.model';

export abstract class MapCommandService {
  abstract create(map: MapModel): MapModel;
  abstract update(): MapModel;
  abstract delete(id: string): boolean;
}
