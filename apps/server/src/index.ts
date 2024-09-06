import 'reflect-metadata'

import { Application } from 'express'
import { createServer, Server as HttpServer } from 'http'

import { getPort } from './config/config'
import Server from './server'

const run = (): void => {
  try {
    const app: Application = new Server().app
    const server: HttpServer = createServer(app)
    const port = parseInt(getPort())
    server.listen(port, () => {
      console.log('Server started successfully!')
    })
    server.on('close', () => {
      console.log('Server closed successfully!')
    })
  } catch (err) {
    console.error('Server start failed', err)
  }
}

run()
