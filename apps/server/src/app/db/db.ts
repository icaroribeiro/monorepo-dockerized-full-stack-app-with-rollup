import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { INTERNAL_SERVER_ERROR } from 'http-status'
import postgres from 'postgres'

import { AppError } from '../app-error'
import { getDatabaseURL } from '../config/config'

const connectToDatabase = (): PostgresJsDatabase<Record<string, never>> => {
  try {
    const queryClient = postgres(getDatabaseURL())
    const db = drizzle(queryClient)
    console.log('Database connection completed successfully!')
    return db
  } catch (error) {
    const message = 'Database connection failed!'
    console.error(message, error)
    throw new AppError(message, INTERNAL_SERVER_ERROR)
  }
}

export { connectToDatabase }
