import { DynamicModule, Module, Provider } from '@nestjs/common';
import { DynamodbWrapper } from './wrapper/dynamodb.wrapper';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

export abstract class DynamoDbClient {
  abstract document: DynamoDBDocument;
}

@Module({
  // controllers: [],
  // providers: [
  //   DynamodbWrapper,
  //   {
  //     provide: DynamoDbClient,
  //     useValue: {
  //       document: DynamoDBDocument.from(
  //           new DynamoDB({
  //             region: 'ap-northeast-1',
  //             endpoint: 'http://localhost:8000',
  //           })
  //         ),
  //     },
  //   },
  // ],
  // exports: [DynamodbWrapper],
})
export class SharedDatabaseDynamodbModule {
  static forFeature<Type>(name: string): DynamicModule {
    const provider: Provider = {
      provide: `${name}Model`,
      useFactory: () => {
        return new DynamodbWrapper<Type>(
          DynamoDBDocument.from(
            new DynamoDB({
              region: 'ap-northeast-1',
              endpoint: 'http://localhost:8000',
            })
          )
        );
      },
    };
    return {
      module: SharedDatabaseDynamodbModule,
      providers: [provider],
      exports: [provider],
    };
  }
}
