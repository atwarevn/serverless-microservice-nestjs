import { DynamodbWrapper } from './dynamodb.wrapper';

describe('DynamodbWrapper', () => {
  it('should be defined', () => {
    expect(new DynamodbWrapper()).toBeDefined();
  });
});
