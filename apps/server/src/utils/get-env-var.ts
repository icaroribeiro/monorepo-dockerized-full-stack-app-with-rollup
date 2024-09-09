import { INTERNAL_SERVER_ERROR } from 'http-status'

import { ServerError } from '../server-error'

function getEnvVar(name: string): string {
  if (!process.env[name]) {
    const message = `${name} environment variable isn't set`
    throw new ServerError(message, INTERNAL_SERVER_ERROR)
  }
  return process.env[name]
}

export { getEnvVar }
