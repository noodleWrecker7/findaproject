import express, { Express } from "express";
import * as posts from "../controllers/posts";

const postsRouter = express.Router();
export default (app: Express) => {
  app.use("/posts", postsRouter);
};

postsRouter.all("*", (req, res, next) => {
  console.log("Request received");
  next();
});
postsRouter.get("/", posts.findAll);

postsRouter.get("/:id", posts.findOne);

postsRouter.post("/", posts.create);

postsRouter.put("/:id", posts.update);

postsRouter.delete("/:id", posts.remove);
