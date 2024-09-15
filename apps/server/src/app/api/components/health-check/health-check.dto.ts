import { HealthCheck } from './healthcheck.model'

type HealthCheckResponse = {
  healthy: boolean
}

const MapHealthCheckResponse = (
  healthCheck: HealthCheck,
): HealthCheckResponse => ({
  healthy: healthCheck.healthy,
})

export { HealthCheckResponse, MapHealthCheckResponse }
