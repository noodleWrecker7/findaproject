import { Express } from "express";
import listings from './listings'
import { Sequelize } from "sequelize";

export default (app:Express, db:Sequelize)=>{
  // all routes files need to be called here
  listings(app)
}
