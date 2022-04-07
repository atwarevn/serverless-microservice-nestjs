#!/usr/bin/env node
import { Environment } from '@src/shared/environment';
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { MapQueryEnvironmentVariables } from '../../environments/environment.common';
import { mapQueryEnvironmentVariables as devEnvVars } from '../../environments/environment.dev';
import { mapQueryEnvironmentVariables as prdEnvVars } from '../../environments/environment.prd';
import { mapQueryEnvironmentVariables as stgEnvVars } from '../../environments/environment.stg';
import { BackendLambdaMapQueryStack } from '../lib/stack';

const app = new cdk.App();
//Contextから'target'として対象の環境(dev|stg|prd)を取得
const target = app.node.tryGetContext('target') as Environment;
const envVarsMapper = {
  [Environment.Development]: devEnvVars,
  [Environment.Staging]: stgEnvVars,
  [Environment.Production]: prdEnvVars,
};
const envVars: MapQueryEnvironmentVariables = envVarsMapper[target];

new BackendLambdaMapQueryStack(app, `${envVars.ENV}-ms-map-query-api-lambda`, envVars, {
  env: {
    account: envVars.AWS_ACCOUNTS[envVars.ENV],
    region: envVars.AWS_REGION,
  },
});
