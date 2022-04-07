import { Environment } from '@src/shared/environment';
import {
  CdkEnvironmentVariables,
  commonCdkEnvironmentVariables,
} from './environment.common';

export const prdCdkEnvironmentVariables: CdkEnvironmentVariables = {
  ...commonCdkEnvironmentVariables,
  ENV: Environment.Development,
};
