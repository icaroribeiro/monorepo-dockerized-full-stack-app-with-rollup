import { sql } from 'drizzle-orm'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

import { HealthCheckResponse, MapHealthCheckResponse } from './health-check.dto'
import { HealthCheck } from './healthcheck.model'

interface IHealthCheckService {
  checkHealth(): HealthCheckResponse
}

class HealthCheckService implements IHealthCheckService {
  constructor(private db: PostgresJsDatabase<Record<string, never>>) {}

  checkHealth(): HealthCheckResponse {
    const healthCheck: HealthCheck = { healthy: true }
    try {
      this.db.execute(sql`SELECT 1`)
    } catch (error) {
      console.log(error)
      healthCheck.healthy = false
      return MapHealthCheckResponse(healthCheck)
    }
    return MapHealthCheckResponse(healthCheck)
  }
}

export { HealthCheckService, IHealthCheckService }
