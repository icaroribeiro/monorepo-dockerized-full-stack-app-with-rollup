import { Request, Response } from 'express'
import { OK } from 'http-status'
import { Post } from 'tsoa'

class TestController {
  constructor() {}

  @Post('/')
  getTest(req: Request, res: Response): Response {
    return res.status(OK).json({
      test: true,
    })
  }
}

export { TestController }
