import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

dotenv.config({
  path: './.env.production',
})

const run = async (): Promise<void> => {
  try {
    const databaseURL = process.env['DATABASE_URL']
      ? process.env.DATABASE_URL
      : ''
    const migrationClient = postgres(databaseURL, { max: 1 })
    await migrate(drizzle(migrationClient), {
      migrationsFolder: import.meta.dirname + '/migrations',
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
