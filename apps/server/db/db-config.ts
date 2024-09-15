import dotenv from 'dotenv'
import { defineConfig } from "drizzle-kit";

import { getDatabaseURL } from '../src/app/config/config'

dotenv.config({
  path: './.env.development',
})

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schemas/index.ts',
  out: './db/migrations',
  dbCredentials: {
    url: getDatabaseURL(),
  },
})
