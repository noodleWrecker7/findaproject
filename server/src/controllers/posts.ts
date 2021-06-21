import { Post, Tag } from "../database";
import { Request, Response } from "express";
import postsRouter from "../routes/posts";
import { User } from "../database/Models/User";

/**
 * Controller Definitions
 */
export async function findAll(req: Request, res: Response) {
  let posts = await Post.findAll({
    include: [{ model: User, attributes: ["username", "id"] }, Tag],
  });
  res.status(200).json(posts);
}

export async function findOne(req: Request, res: Response) {
  let post = await Post.findOne({
    where: { id: req.params.id },
    include: [{ model: User, attributes: ["username", "id"] }, Tag],
  });
  if (!post) {
    return res.status(404).send("Not found");
  }
  res.status(200).json(post);
}

/**body: { author, content, title, tags: [ IDs ] }*/
export async function create(req: Request, res: Response) {
  if (!req.user) {
    return res.status(401).send("Must be logged in to create posts");
  }
  // let author = req.body.author;
  let author = req.user;
  let content = req.body.content;
  let title = req.body.title;
  let tagIds = req.body.tags;
  if (!content || !title) {
    return res.status(400).send("Missing required fields");
  }
  //@ts-ignore
  let user = await User.findOne({ where: { id: author.id } });
  if (!user) {
    return res.status(401).send("Could not find user data");
  }

  let post = await Post.create({ content, title });
  if (tagIds) {
    //@ts-ignore
    post.addTags(tagIds);
  }
  //@ts-ignore
  user.addPost(post);
  await post.save();
  res.status(201).json({ post });
}

export async function update(req: Request, res: Response) {}

export async function remove(req: Request, res: Response) {}
