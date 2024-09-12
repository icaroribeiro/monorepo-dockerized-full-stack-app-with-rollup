import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { getDatabaseURL } from '../config/config'

const run = (): void => {
  try {
    const migrationClient = postgres(getDatabaseURL(), { max: 1 })
    migrate(drizzle(migrationClient), {
      migrationsFolder: './src/migrations',
    })
    console.log('Migrations completed successfully!')
    process.exit(0)
  } catch (error) {
    console.log('Migrations failed!', error)
    process.exit(1)
  }
}

run()
