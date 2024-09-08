import { getEnvVar } from './utils'

function getTest(): string {
  return getEnvVar('TEST')
}

function getDatabaseURL(): string {
  return getEnvVar('DATABASE_URL')
}

function getPort(): string {
  return getEnvVar('PORT')
}

export { getDatabaseURL, getPort, getTest }
