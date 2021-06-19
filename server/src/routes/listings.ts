import { Express, Request, Response } from "express";
import { Sequelize } from "sequelize";

export default (app: Express, db:Sequelize) => {
  app.get('route/to/endpoint', (req: Request, res: Response) => {
    res.send();
  })
}
