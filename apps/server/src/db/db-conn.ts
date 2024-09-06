import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { INTERNAL_SERVER_ERROR } from 'http-status'
import postgres from 'postgres'

import { getDatabaseURL } from '../config/config'
import { ServerError } from '../server-error'

const queryClient = postgres(getDatabaseURL())

const connToBD = (): PostgresJsDatabase<Record<string, never>> => {
  try {
    const db = drizzle(queryClient)
    console.log('Database connection completed successfully!')
    return db
  } catch (error) {
    const message = 'Database connection failed!'
    console.error(message, error)
    throw new ServerError(INTERNAL_SERVER_ERROR, message)
  }
}

export { connToBD }
