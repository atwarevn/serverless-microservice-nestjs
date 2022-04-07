import { Environment } from '@src/shared/environment';
import {
  CdkEnvironmentVariables,
  commonCdkEnvironmentVariables,
} from './environment.common';

export const stgCdkEnvironmentVariables: CdkEnvironmentVariables = {
  ...commonCdkEnvironmentVariables,
  ENV: Environment.Staging,
};
