import { OK } from 'http-status'
import { Controller } from 'tsoa'
import { injectable } from 'tsyringe'

@injectable()
// @Route('tests')
// @Tags('tests')
class TestController extends Controller {
  constructor() {
    super()
  }

  // @Post('/')
  getTest() {
    this.setStatus(OK)
    return
  }
}

export { TestController }
