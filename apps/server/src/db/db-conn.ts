import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { INTERNAL_SERVER_ERROR } from 'http-status'
import postgres from 'postgres'

import { getDatabaseURL } from '../server-config'
import { ServerError } from '../server-error'

const connectToDatabase = (): PostgresJsDatabase<Record<string, never>> => {
  try {
    const queryClient = postgres(getDatabaseURL())
    const db = drizzle(queryClient)
    console.log('Database connection completed successfully!')
    return db
  } catch (error) {
    const message = 'Database connection failed!'
    console.error(message, error)
    throw new ServerError(message, INTERNAL_SERVER_ERROR)
  }
}

export { connectToDatabase }
