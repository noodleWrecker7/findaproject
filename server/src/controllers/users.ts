import { User } from "../database/Models/User";
import { Request, Response } from "express";

/**
 * Controller Definitions
 */

export async function findOne(req: Request, res: Response) {
  let user = await User.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["hash", "salt"] },
  });
  if (user == null) {
    res.status(404).send();
    return;
  }
}

export async function findAll(req: Request, res: Response) {
  let users =
    await User.findAll(/*{ attributes: { exclude: ['hash', 'salt'] } }*/);
  res.status(200).json(users);
  console.log(req.user);
}

export async function signup(req: Request, res: Response) {}
