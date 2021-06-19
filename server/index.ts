import 'source-map-support/register'
import express, { Express, Request, Response } from 'express'

import { Server } from 'http'

import routes from './routes'

import {db} from './database'

const PORT = process.env.PORT || 12345
const app:Express = express()
const http = new Server(app)
routes(app, db)

http.listen(PORT, () => {
  console.log("Listening on port: " + PORT)
})

