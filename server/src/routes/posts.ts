import express, { Express } from "express";
import * as posts from '../controllers/posts'

const postsRouter = express.Router();
export default (app: Express) => {
  app.use("/posts", postsRouter)
}

postsRouter.all("*", (req, res, next) => {
  console.log("Request received")
  next()
})
// GET items
postsRouter.get('/', posts.findAll)

// GET items/:id
postsRouter.get('/:id', posts.findOne)

// POST items
postsRouter.post('/', posts.create)

// PUT items/:id
postsRouter.put('/:id', posts.update)

// DELETE items/:id

postsRouter.delete('/:id', posts.remove)
