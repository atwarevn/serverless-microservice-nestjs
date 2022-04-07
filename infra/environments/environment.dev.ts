import { Environment } from '@src/shared/environment';
import { commonCdkEnvironmentVariables, CdkEnvironmentVariables } from './environment.common';

export const devCdkEnvironmentVariables: CdkEnvironmentVariables = {
  ...commonCdkEnvironmentVariables,
  ENV: Environment.Development
};
