import dotenv from 'dotenv'
import { Config } from 'drizzle-kit'

import { getDatabaseURL } from '../server-config'

const isProduction = process.env.NODE_ENV === 'production'

dotenv.config({
  path: isProduction ? './.env.production' : './.env.development',
})

const dbConfig: Config = {
  dialect: 'postgresql',
  schema: './src/db/schemas/index.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: getDatabaseURL(),
  },
}

export default dbConfig satisfies Config
