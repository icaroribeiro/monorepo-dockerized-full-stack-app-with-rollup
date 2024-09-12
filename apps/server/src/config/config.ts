import { getEnvVar } from '../utils'

function getPort(): string {
  return getEnvVar('PORT')
}

function getDatabaseURL(): string {
  return getEnvVar('DATABASE_URL')
}

export { getDatabaseURL, getPort }
