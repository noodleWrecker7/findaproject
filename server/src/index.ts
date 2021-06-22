import "source-map-support/register";
import express, { Express } from "express";

import { Server } from "http";
import { initDB } from "./database";
initDB();

import cors from "cors";

import routes from "./routes";
import expressSession from "express-session";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 12345;
const app: Express = express();
const http = new Server(app);
app.set("trust proxy", 1); // trust first
app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ type: "application/json" }));
// app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ type: "application/x-www-form-urlencoded" }));
app.use(
  expressSession({
    secret: randomBytes(8).toString("hex"),
    cookie: { secure: "auto" },
  })
);
routes(app);

http.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
