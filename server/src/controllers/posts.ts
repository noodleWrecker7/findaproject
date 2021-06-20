import { Post, Tag } from "../database";
import { Request, Response } from "express";
import postsRouter from "../routes/posts";

/**
 * Controller Definitions
 */
export async function findAll(req: Request, res: Response) {
  let posts = await Post.findAll({include: Tag})
  res.status(200).json(posts);
}

export async function findOne(req: Request, res: Response) {

}

/**body: { author, content, title, tags: [ IDs ] }*/
export async function create(req: Request, res: Response) {
  let author = req.body.author
  let content = req.body.content
  let title = req.body.title
  let tagIds = req.body.tags

  await Post.create({author: "", content: ""})

}

export async function update(req: Request, res: Response) {

}

export async function remove(req: Request, res: Response) {

}

