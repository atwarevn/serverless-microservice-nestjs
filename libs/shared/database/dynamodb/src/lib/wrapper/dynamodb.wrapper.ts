import { Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { NativeAttributeValue } from '@aws-sdk/util-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

@Injectable()
export class DynamodbWrapper<T> {
  private tableName: string | undefined;

  constructor(private dynamoDb: DynamoDBDocument) {}

  public init(tableName: string) {
    this.tableName = tableName;
  }

  public get(Key: { [key: string]: NativeAttributeValue }): Observable<T> {
    return from(
      this.dynamoDb.get({
        TableName: this.tableName,
        Key,
      })
    ).pipe(map((data) => data.Item as unknown as T));
  }
}
