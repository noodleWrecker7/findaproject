import { Express } from "express";
import postsRouter from "./postsRouter";
import { Sequelize } from "sequelize";

export default (app:Express)=>{
  // all routes files need to be called here
  postsRouter(app)
}
