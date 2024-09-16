import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import path from 'path'
import postgres from 'postgres'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '..', '.env.production'),
})

const run = async (): Promise<void> => {
  let migrationClient: postgres.Sql
  try {
    const databaseURL = process.env['DATABASE_URL']
      ? process.env.DATABASE_URL
      : ''
    migrationClient = postgres(databaseURL, { max: 1 })
    console.log('Migration client created successfully!')
  } catch (error) {
    console.log('Migration client creation failed!', error)
    process.exit(0)
  }

  try {
    const migrationsFolder = dirname + '/migrations'
    await migrate(drizzle(migrationClient), {
      migrationsFolder: migrationsFolder,
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
