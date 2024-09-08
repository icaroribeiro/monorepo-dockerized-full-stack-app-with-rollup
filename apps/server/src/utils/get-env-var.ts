import { INTERNAL_SERVER_ERROR } from 'http-status'

import { ServerError } from '../server-error'

function getEnvVar(name: string): string {
  if (!process.env[name]) {
    const message = `${name} environment variable isn't set`
    throw new ServerError(INTERNAL_SERVER_ERROR, message)
  }
  return process.env[name]
}

export { getEnvVar }
