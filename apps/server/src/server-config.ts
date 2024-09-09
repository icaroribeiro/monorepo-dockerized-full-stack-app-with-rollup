import { getEnvVar } from './utils'

function getDatabaseURL(): string {
  return getEnvVar('DATABASE_URL')
}

function getPort(): string {
  return getEnvVar('PORT')
}

export { getDatabaseURL, getPort }
