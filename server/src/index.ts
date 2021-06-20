import 'source-map-support/register'
import express, { Express } from 'express'

import { Server } from 'http'
import { initDB } from "./database";
initDB()

import routes from './routes'


const PORT = process.env.PORT || 12345
const app:Express = express()
const http = new Server(app)
routes(app)

http.listen(PORT, () => {
  console.log("Listening on port: " + PORT)
})

