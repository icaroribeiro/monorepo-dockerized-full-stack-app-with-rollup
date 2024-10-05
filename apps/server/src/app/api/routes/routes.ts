import { Router } from 'express'
import { container } from 'tsyringe'

import { TestController } from '../components/test'

const testController = container.resolve(TestController)
const testRouter = Router()
testRouter.get('/', testController.getTest.bind(testController))

export { testRouter }
