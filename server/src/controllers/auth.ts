import { pbkdf2Sync, randomBytes } from "crypto";
import { User } from "../database/Models/User";
import { Request, Response } from "express";

export async function localSignup(req: Request, res: Response) {
  let username = req.body.username;
  let password: string = req.body.password;
  let usertemp = await User.findOne({ where: { username } });
  if (usertemp) {
    return res.status(403).send("That name is taken");
  }
  if (!validatePassword(password)) {
    return res.status(406).send("Password does not meet minimum requirements");
  }
  let salt = randomBytes(16).toString("hex");
  let hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  let user = await User.create({ username, hash, salt });
  res.status(200).json({ userid: user.id });
}

/**8+ Chars long, One uppercase, One lowercase, One special*/
function validatePassword(password: string): boolean {
  return (
    password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/
    ) != null
  );
}

/**Responds with object of currently in session user*/
export async function findMe(req: Request, res: Response) {
  console.log("find me");
  if (!req.user) {
    res.status(401).json("You are not logged in!");
    return;
  }
  console.log("find me ");
  res.json(req.user);
}
