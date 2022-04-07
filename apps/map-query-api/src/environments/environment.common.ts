import {
  commonEnvironmentVariables,
  CommonEnvironmentVariables,
} from '@src/shared/environment';

export interface MapQueryEnvironmentVariables
  extends CommonEnvironmentVariables {
  MAP_DB_TABLE_NAME: string;
}

export const commonMapQueryEnvironmentVariables: MapQueryEnvironmentVariables =
  {
    ...commonEnvironmentVariables,
    GLOBAL_PREFIX: 'lambda/map-query-api',
    MAP_DB_TABLE_NAME: 'map-table',
    SERVICE_NAME: "map-query-service"
  };
