import express, { Express } from "express";
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
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.hash || !user.salt) {
          return done(null, false, {
            message: "No password found for this account.",
          });
        }
        if (!doesPasswordMatchHash(password, user.hash, user.salt)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      })
      .catch((err) => {
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
    failureFlash: false,
    failureMessage: "Failed to authenticate",
  }),
  (req, res) => {
    console.log("posted login");
    res.status(200).send();
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

authRouter.get("/me", auth.findMe);

export default (app: Express) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use("/auth", authRouter);
};
