import { Stack } from 'aws-cdk-lib';
import { MapQueryEnvironmentVariables } from '../../environments/environment.common';
import { Lambda } from '@src/infra/cdk';

export class MapQueryLambda {
  constructor(
    private readonly stack: Stack,
    private readonly envVars: MapQueryEnvironmentVariables
  ) {
    new Lambda(this.stack, this.envVars, {
      functionName: 'map-query-function',
      functionId: 'MapQueryFunction',
    });
  }
}
