import express, { Application, json, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'

// import { fileURLToPath } from 'url'
// import { errorMiddleware } from './middlewares'
// import swaggerDocument from '../docs/api/swagger.json'
import { RegisterRoutes } from './api/routes/routes'

class Server {
  private readonly _app: Application = express()

  public constructor() {
    this._app.use(json())
    // this._app.use(
    //   '/api-docs',
    //   swaggerUi.serve,
    //   async (req: Request, res: Response) => {
    //     return res.send(
    //       swaggerUi.generateHTML(await import('../docs/api/swagger.json')),
    //     )
    //   },
    // )
    RegisterRoutes(this._app)
    // this._app.use(errorMiddleware)
  }

  public get app(): express.Application {
    return this._app
  }
}

export default Server
