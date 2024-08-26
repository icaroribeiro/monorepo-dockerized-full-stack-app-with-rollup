import 'reflect-metadata'

import dotenv from 'dotenv'
import path from 'path'
import { DataSource } from 'typeorm'

import {
  getDBHost,
  getDBName,
  getDBPassword,
  getDBPort,
  getDBUser,
} from './config/config'
import { Todo } from './domain/todo/todo.entity'

dotenv.config({ path: './env_files/.env.development' })

const config = {
  host: getDBHost(),
  port: parseInt(getDBPort()),
  username: getDBUser(),
  password: getDBPassword(),
  database: getDBName(),
}

const dataSource = new DataSource({
  ...config,
  type: 'postgres',
  synchronize: false,
  logging: false,
  entities: [Todo],
  migrations: [],
  subscribers: [],
})

export { dataSource }
