import { DataSourceError } from '../data-source-error'

function getDBDriver(): string {
  return getEnvVar('DB_DRIVER')
}

function getDBUser(): string {
  return getEnvVar('DB_USER')
}

function getDBPassword(): string {
  return getEnvVar('DB_PASSWORD')
}

function getDBHost(): string {
  return getEnvVar('DB_HOST')
}

function getDBPort(): string {
  return getEnvVar('DB_PORT')
}

function getDBName(): string {
  return getEnvVar('DB_NAME')
}

function getEnvVar(name: string): string {
  if (!process.env[name]) {
    const message = `${name} environment variable isn't set`
    throw new DataSourceError(500, message)
  }
  return process.env[name]
}

export {
  getDBDriver,
  getDBHost,
  getDBName,
  getDBPassword,
  getDBPort,
  getDBUser,
}
