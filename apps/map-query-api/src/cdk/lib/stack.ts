import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MapQueryEnvironmentVariables } from '../../environments/environment.common';
import { MapQueryLambda } from './lambda';

export class BackendLambdaMapQueryStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    private readonly envVars: MapQueryEnvironmentVariables,
    props?: StackProps
  ) {
    super(scope, id, props);
    new MapQueryLambda(this, envVars);
  }
}
