import { User } from '../database/Models/User';
import { Request, Response } from 'express';
import { pbkdf2Sync, randomBytes } from 'crypto';

/**
 * Controller Definitions
 */


export async function findOne(req: Request, res: Response) {
  let user = await User.findOne({ where: { id: req.params.id }, attributes: { exclude: ['hash', 'salt'] } });
  if (user == null) {
    res.status(404).send();
    return;
  }
}

export async function signup(req: Request, res: Response) {
  let username = req.body.username;
  let password = req.body.password;
  if (!validatePassword(password)) {
    res.status(406).send();
  }
  let salt = randomBytes(16).toString('hex');
  let hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  let user = await User.create({ username, hash, salt });
  res.status(200).json({ userid: user.id });
}

/**8+ Chars long, One uppercase, One lowercase, One special*/
function validatePassword(password: string): boolean {
  return (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/) != null);
}
