import { Environment } from '@src/shared/environment';
import { commonMapQueryEnvironmentVariables, MapQueryEnvironmentVariables } from './environment.common';

export const mapQueryEnvironmentVariables: MapQueryEnvironmentVariables = {
  ...commonMapQueryEnvironmentVariables,
  ENV: Environment.Localhost
};
