import { Express } from "express";

export default (app: Express) => {
  app.get('route/to/endpoint', (req, res) => {
    res.send();
  })
}
