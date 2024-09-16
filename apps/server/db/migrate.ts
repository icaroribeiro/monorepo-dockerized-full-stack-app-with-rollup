import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import path from 'path'
import postgres from 'postgres'
import { fileURLToPath } from 'url'

dotenv.config({
  path: './.env.production',
})

const run = async (): Promise<void> => {
  const databaseURL = process.env['DATABASE_URL']
    ? process.env.DATABASE_URL
    : ''
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const migrationsFolder = __dirname + '/migrations'
  try {
    const migrationClient = postgres(databaseURL, { max: 1 })
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
