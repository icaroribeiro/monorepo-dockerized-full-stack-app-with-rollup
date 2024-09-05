import { Config } from 'drizzle-kit'

import { getEnvVar } from '../utils'

const datastoreConfig: Config = {
  dialect: 'postgresql',
  schema: './src/schemas/index.ts',
  out: './src/migrations',
  dbCredentials: {
    url: getEnvVar('DATABASE_URL'),
  },
}

export default datastoreConfig satisfies Config
