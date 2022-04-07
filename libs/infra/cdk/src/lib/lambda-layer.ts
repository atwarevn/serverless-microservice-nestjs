import { Stack } from 'aws-cdk-lib';
import { Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';

export class LambdaLayer {
  static readonly runtime: Runtime = Runtime.NODEJS_14_X;

  readonly layer: LayerVersion;

  constructor(private readonly stack: Stack) {
    this.layer = new LayerVersion(this.stack, 'NodeModulesLayer', {
      code: Code.fromAsset(`${__dirname}/dist/node_modules`),
      compatibleRuntimes: [LambdaLayer.runtime],
    });
  }
}
