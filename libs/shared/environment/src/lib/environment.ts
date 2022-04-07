export enum Environment {
  Localhost = 'localhost',
  Development = 'dev',
  Staging = 'stg',
  Production = 'prd',
}

export interface CommonEnvironmentVariables {
  AWS_REGION: string;
  GLOBAL_PREFIX?: string;
  ENV?: Environment;
  AWS_ACCOUNTS: { env: Environment; account: string }[];
  SYSTEM_NAME?: string;
  SERVICE_NAME?: string;
}

export const commonEnvironmentVariables: CommonEnvironmentVariables = {
  AWS_REGION: '',
  AWS_ACCOUNTS: [
    { env: Environment.Development, account: 'T.B.D' },
    { env: Environment.Staging, account: 'T.B.D' },
    { env: Environment.Production, account: 'T.B.D' },
  ],
  SYSTEM_NAME: ''
};

export const commonConfigModuleOptions = {
  isGlobal: true,
};
