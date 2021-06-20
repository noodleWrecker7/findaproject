import express, { Express } from "express";
import * as users from '../controllers/users'
import { User } from "../database/Models/User";

const usersRouter = express.Router();
export default (app: Express) => {
  app.use("/users", usersRouter)
}
// todo passport js for propper session bases authentication
usersRouter.all("*", (req, res, next) => {
  console.log("Request received /users")
  next()
})

usersRouter.get('/:id', users.findOne)

usersRouter.post('/signup', users.signup)
