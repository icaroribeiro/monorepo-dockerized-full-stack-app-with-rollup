import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { getEnvVar } from './utils'

const queryClient = postgres(getEnvVar('DATABASE_URL'))

const db = drizzle(queryClient)

export { db }
