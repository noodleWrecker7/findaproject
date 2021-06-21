import express, { Express } from "express";
import expressSession from "express-session";
import * as auth from "../controllers/auth";
import { User } from "../database/Models/User";

import passport from "passport";
import { pbkdf2Sync } from "crypto";

const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function (
    username: string,
    password: string,
    done: Function
  ) {
    User.findOne({ where: { username } })
      .then((user) => {
        console.log(user);
        if (!user) {
          console.log("wrong username");
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.hash || !user.salt) {
          console.log("no password found for account");
          return done(null, false, {
            message: "No password found for this account.",
          });
        }
        if (!doesPasswordMatchHash(password, user.hash, user.salt)) {
          console.log("password wrong");
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      })
      .catch((err) => {
        console.log("caught error in promise");
        return done(err);
      });
  })
);

function doesPasswordMatchHash(
  password: string,
  hash: string,
  salt: string
): boolean {
  return hash == pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
}

passport.serializeUser(function (user, done) {
  // @ts-ignore
  done(null, user.id);
});

passport.deserializeUser(async function (id: any, done) {
  let user = await User.findOne({ where: { id: id } });
  if (!user) {
    done(new Error("user not found"), null);
  } else {
    done(null, user);
  }
});

const authRouter = express.Router();

authRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/loginfailed",
    failureFlash: false,
    failureMessage: "Failed to authenticate",
  }),
  (req, res) => {
    console.log("posted login");
    res.send("Success");
  }
);

authRouter.post(
  "/signup",
  auth.localSignup,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

export default (app: Express) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use("/auth", authRouter);
};
