import { Post, Tag } from "../database";
import { Request, Response } from "express";
import postsRouter from "../routes/postsRouter";

/**
 * Controller Definitions
 */
export async function findAll(req: Request, res: Response) {
  try {
    let posts = await Post.findAll({include: Tag})
    res.status(200).json(posts);
  } catch (e) {
    res.status(500)
    console.log(e)
  }
}

export async function findOne(req: Request, res: Response) {

}

export async function create(req: Request, res: Response) {

}

export async function update(req: Request, res: Response) {

}

export async function remove(req: Request, res: Response) {

}

