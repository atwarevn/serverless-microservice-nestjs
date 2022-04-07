# App

```shell
nx generate @nrwl/nest:application --name=map-query-api --no-interactive
nx generate @nrwl/nest:application --name=map-command-api --no-interactive
```

# CDK
nx generate @nrwl/nest:library --name=cdk --directory=infra --strict --target=es2020 --no-interactive
# Core

## Domain

```shell
nx generate @nrwl/nest:library --name=domain --directory=map/core --strict --unitTestRunner=none --no-interactive

# Entity interfaces
nx generate @nrwl/nest:class --name=map.entity --project=map-core-domain --directory=lib/entities --no-interactive
```

## Repositories

```shell
nx generate @nrwl/nest:library --name=repositories --directory=map/core --strict --unitTestRunner=none --no-interactive

# Repository interfaces
nx generate @nrwl/nest:class --name=map.repository --project=map-core-repositories --directory=lib --unitTestRunner=none --no-interactive
```

## Services

```shell
nx generate @nrwl/nest:library --name=services --directory=map/core --strict --unitTestRunner=none --no-interactive

# Models
nx generate @nrwl/nest:class --name=map.model --project=map-core-services --directory=lib/models --unitTestRunner=none --no-interactive

# Query services
nx generate @nrwl/nest:class --name=map-query.service --project=map-core-services --directory=lib/queries --unitTestRunner=none --no-interactive

# Command services
nx generate @nrwl/nest:class --name=map-command.service --project=map-core-services --directory=lib/commands --unitTestRunner=none --no-interactive
```

# Infrastructure

```shell
nx generate @nrwl/nest:library --name=infrastructure --directory=map --strict --no-interactive

# Repositories
nx generate @nrwl/nest:class --name=map-dynamodb.repository --project=map-infrastructure --directory=lib/repositories --no-interactive
```

# Services

```shell
nx generate @nrwl/nest:library --name=services --directory=map --strict --no-interactive
```

## Query services

```shell
nx generate @nrwl/nest:class --name=map-query.service-impl --project=map-services --directory=lib/queries --no-interactive
```

# Shared

## DynamoDb

```shell
nx generate @nrwl/nest:library --name=dynamodb --directory=shared/database --linter=eslint --unitTestRunner=jest --testEnvironment=node --target=esnext --strict --no-interactive

# DynamoDB wrapper
nx generate @nrwl/nest:class --name=dynamodb.wrapper --project=shared-database-dynamodb --directory=lib/wrapper --unitTestRunner=jest --flat --language=ts --no-interactive
```
