import { LambdaLayer } from '@src/infra/cdk';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CdkEnvironmentVariables } from '../environments/environment.common';

export class BackendStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    private readonly envVars: CdkEnvironmentVariables,
    props?: StackProps
  ) {
    super(scope, id, props);
    new LambdaLayer(this);
  }
}
