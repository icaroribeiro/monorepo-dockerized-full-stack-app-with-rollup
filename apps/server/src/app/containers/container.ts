import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { container } from 'tsyringe'

import { HealthCheckService } from '../api/components/health-check'
import { UserRepository, UserService } from '../api/components/user'
import { connectToDatabase } from '../db/db'

container.register<PostgresJsDatabase<Record<string, never>>>('db', {
  useValue: connectToDatabase(),
})

container.register<UserRepository>('IUserRepository', {
  useValue: new UserRepository(
    container.resolve<PostgresJsDatabase<Record<string, never>>>('db'),
  ),
})

container.register<HealthCheckService>('IHealthCheckService', {
  useValue: new HealthCheckService(
    container.resolve<PostgresJsDatabase<Record<string, never>>>('db'),
  ),
})

container.register<UserService>('IUserService', {
  useValue: new UserService(
    container.resolve<UserRepository>('IUserRepository'),
  ),
})

export { container }
