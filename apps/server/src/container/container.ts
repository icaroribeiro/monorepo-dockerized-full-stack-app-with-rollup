import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { container } from 'tsyringe'

import {
  UserModel,
  UserModelImpl,
  UserService,
  UserServiceImpl,
} from '../api/components/user'
import { connToBD } from '../db/db-conn'

container.register<PostgresJsDatabase<Record<string, never>>>('db', {
  useValue: connToBD(),
})

container.register<UserModel>('userModel', {
  useValue: new UserModelImpl(
    container.resolve<PostgresJsDatabase<Record<string, never>>>('db'),
  ),
})

container.register<UserService>('userService', {
  useValue: new UserServiceImpl(container.resolve<UserModel>('userModel')),
})

export { container }
