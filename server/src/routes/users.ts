import express, { Express } from "express";
import * as users from "../controllers/users";

const usersRouter = express.Router();
export default (app: Express) => {
  app.use("/users", usersRouter);
};
// todo passport js for proper session bases authentication
usersRouter.all("*", (req, res, next) => {
  console.log("Request received /users");
  next();
});

usersRouter.get("/:id", users.findOne);
usersRouter.get("/", users.findAll);
