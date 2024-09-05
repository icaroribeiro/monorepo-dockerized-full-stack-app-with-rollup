import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { getEnvVar } from './utils'

const migrationClient = postgres(getEnvVar('DATABASE_URL'), { max: 1 })

migrate(drizzle(migrationClient), { migrationsFolder: './src/migrations' })
