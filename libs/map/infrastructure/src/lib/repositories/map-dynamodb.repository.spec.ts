import { MapRepository } from './map-dynamodb.repository';

describe('MapRepository', () => {
  it('should be defined', () => {
    expect(new MapRepository()).toBeDefined();
  });
});
