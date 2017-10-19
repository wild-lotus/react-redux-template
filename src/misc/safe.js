// @flow

export const safe = <T>(value: ?T): T => {
  if (value != null) return value;
  else throw new Error('Unexpected undefined or null value');
};

export const safeEnv = (envName: string): string => {
  const env = process.env[envName];
  if (env != null) return env;
  throw new Error(
    `Required '${envName}' env variable not defined. Check dotenv files.`
  );
};
