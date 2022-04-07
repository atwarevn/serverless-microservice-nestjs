import { CommonEnvironmentVariables, Environment } from '@src/shared/environment';
import { Duration, Stack } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Code } from 'aws-cdk-lib/aws-lambda';
import { LambdaLayer } from './lambda-layer';
import { resolve } from 'path';

export class Lambda {
  constructor(
    private readonly stack: Stack,
    private readonly envVars: CommonEnvironmentVariables,
    private readonly options: {
      functionName: string,
      functionId: string
    }
  ) {
    this.constructLambda();
  }

  constructLambda(): lambda.Function {
    const layer = new LambdaLayer(this.stack);
    const code = Code.fromAsset(
      resolve(`${__dirname}/dist/apps/map-query-api`),
      {}
    );

    const config = {
      code,
      timeout: Duration.seconds(10),
      handler: 'main.handler',
      runtime: LambdaLayer.runtime,
      layers: [layer.layer],
      environment: {
        NODE_PATH: '$NODE_PATH:/opt',
        ENV: process.env?.['NODE_ENV'] ?? Environment.Development,
      },
    };

    return new lambda.Function(this.stack, this.options.functionId, {
      ...config,
      functionName: `${this.envVars.ENV}-${this.options.functionName}`,
    });
  }
}
