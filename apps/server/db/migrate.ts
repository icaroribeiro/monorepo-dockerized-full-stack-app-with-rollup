import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { getDatabaseURL } from '../src/app/config/config'

const run = async (): Promise<void> => {
  try {
    const migrationClient = postgres(getDatabaseURL(), { max: 1 })
    await migrate(drizzle(migrationClient), {
      migrationsFolder: './db/migrations',
    })
    console.log('Migrations completed successfully!')
    await migrationClient.end()
    process.exit(0)
  } catch (error) {
    console.log('Migrations failed!', error)
    process.exit(1)
  }
}

run()
