import { INTERNAL_SERVER_ERROR } from 'http-status'

import { AppError } from '../app-error'

function getPort(): string {
  return getEnvVar('PORT')
}

function getDatabaseURL(): string {
  return getEnvVar('DATABASE_URL')
}

function getEnvVar(name: string): string {
  if (!process.env[name]) {
    const message = `${name} environment variable isn't set`
    throw new AppError(message, INTERNAL_SERVER_ERROR)
  }
  return process.env[name]
}

export { getDatabaseURL, getPort }
