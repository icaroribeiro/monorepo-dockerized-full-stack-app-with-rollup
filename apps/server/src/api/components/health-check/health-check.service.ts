import { sql } from 'drizzle-orm'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

import { HealthCheckResponse, MapHealthCheckResponse } from './health-check.dto'

interface IHealthCheckService {
  checkHealth(): HealthCheckResponse
}

class HealthCheckService implements IHealthCheckService {
  constructor(private db: PostgresJsDatabase<Record<string, never>>) {}

  checkHealth(): HealthCheckResponse {
    try {
      this.db.execute(sql`SELECT 1`)
    } catch (error) {
      console.log(error)
      return MapHealthCheckResponse(false)
    }
    return MapHealthCheckResponse(true)
  }
}

export { HealthCheckService, IHealthCheckService }
