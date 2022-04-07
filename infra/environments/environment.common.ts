import {
  commonEnvironmentVariables,
  CommonEnvironmentVariables
} from '@src/shared/environment';

export interface CdkEnvironmentVariables extends CommonEnvironmentVariables {}

export const commonCdkEnvironmentVariables: CdkEnvironmentVariables = {
  ...commonEnvironmentVariables,
};
