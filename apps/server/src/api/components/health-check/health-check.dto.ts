type HealthCheckResponse = {
  health: boolean
}

const MapHealthCheckResponse = (ok: boolean): HealthCheckResponse => ({
  health: ok,
})

export { HealthCheckResponse, MapHealthCheckResponse }
