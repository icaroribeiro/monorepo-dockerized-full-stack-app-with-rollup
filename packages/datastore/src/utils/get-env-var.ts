import { DatastoreError } from './datastore-error'

function getEnvVar(name: string): string {
  if (!process.env[name]) {
    const message = `${name} environment variable isn't set`
    throw new DatastoreError(500, message)
  }
  return process.env[name]
}

export { getEnvVar }
