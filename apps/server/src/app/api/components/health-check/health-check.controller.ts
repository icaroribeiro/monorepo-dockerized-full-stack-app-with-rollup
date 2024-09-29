import { Controller, Example, Get, Response, Route, Tags } from 'tsoa'
import { inject, injectable } from 'tsyringe'

import { ErrorResponse } from '../../shared'
import { HealthCheckResponse } from './health-check.dto'
import { IHealthCheckService } from './health-check.service'

@injectable()
@Route('health')
@Tags('health-check')
class HealthCheckController extends Controller {
  constructor(
    @inject('HealthCheckService')
    private healthCheckService: IHealthCheckService,
  ) {
    super()
  }

  /**
   * API endpoint used to verify if the serviççce has started up correctly and is ready to accept requests
   */
  @Get('/')
  @Response('200', 'OK')
  @Response<ErrorResponse>('500', 'Internal Server Error', {
    status: 'error',
    message: 'Internal Server Error',
    details: undefined,
  })
  @Example<HealthCheckResponse>({
    healthy: true,
  })
  async getHealth(): Promise<HealthCheckResponse> {
    return Promise.resolve(this.healthCheckService.checkHealth())
  }
}

export { HealthCheckController }
