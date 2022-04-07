#!/usr/bin/env node
import { Environment } from '@src/shared/environment';
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { CdkEnvironmentVariables } from '../environments/environment.common';
import { devCdkEnvironmentVariables } from '../environments/environment.dev';
import { prdCdkEnvironmentVariables } from '../environments/environment.prd';
import { stgCdkEnvironmentVariables } from '../environments/environment.stg';
import { BackendStack } from '../lib/stack';

const app = new cdk.App();

//Contextから'target'として対象の環境(dev|stg|prd)を取得
const target = app.node.tryGetContext('target') as Environment;
const envVarsMapper = {
  [Environment.Development]: devCdkEnvironmentVariables,
  [Environment.Staging]: stgCdkEnvironmentVariables,
  [Environment.Production]: prdCdkEnvironmentVariables,
};
const envVars: CdkEnvironmentVariables = envVarsMapper[target];

new BackendStack(app, `${envVars.ENV}-ms`, envVars, {
  env: {
    account: envVars.AWS_ACCOUNTS[envVars.ENV],
    region: envVars.AWS_REGION,
  },
});
