import express, { Application, json, Request, Response } from 'express'
import { getAbsoluteFSPath } from 'swagger-ui-dist'
import swaggerUi from 'swagger-ui-express'

// import { fileURLToPath } from 'url'
// import { errorMiddleware } from './middlewares'
import swaggerDocument from '../docs/api/swagger.json'
import { RegisterRoutes } from './api/routes/routes'

class Server {
  private readonly _app: Application = express()

  public constructor() {
    this._app.use(json())
    const pathToSwaggerUi = getAbsoluteFSPath()
    this._app.use(express.static(pathToSwaggerUi))
    // const swaggerHtml = swaggerUi.generateHTML(swaggerDocument)
    // this._app.get('/api-docs', async (req: Request, res: Response) => {
    //   res.send(swaggerHtml)
    // })
    // this._app.use(
    //   '/api-docs',
    //   swaggerUi.serve,
    //   swaggerUi.setup(swaggerDocument),
    // )
    // const swaggerUiOpts = {
    //   explorer: false,
    //   customCss: '.swagger-ui .topbar { background-color: blue }',
    // }
    // const swaggerHtml = swaggerUi.generateHTML(swaggerDocument, swaggerUiOpts)
    // this._app.get('/api-docs-123', (req, res) => {
    //   res.send(swaggerHtml)
    // })
    // this._app.get('/api-docs-html1', (req, res) => {
    //   res.send(swaggerHtml)
    // })
    // const swaggerUiOpts = {
    //   explorer: false,
    //   customCss: '.swagger-ui .topbar { background-color: blue }',
    // }
    // const swaggerHtml = swaggerUi.generateHTML(swaggerDocument, swaggerUiOpts)
    this._app.use(
      '/api-docs',
      swaggerUi.serve,
      async (req: Request, res: Response) => {
        res.send(swaggerUi.generateHTML(swaggerDocument))
      },
    )
    RegisterRoutes(this._app)
    // this._app.use(errorMiddleware)
  }

  public get app(): express.Application {
    return this._app
  }
}

export default Server
