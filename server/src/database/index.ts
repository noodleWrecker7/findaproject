import { Sequelize } from "sequelize";
import modelsInit from "./Models";

export function initDB() {
  const db = new Sequelize("database", "user", "password", {
    host: "localhost",
    dialect: "sqlite",
    logging: false,
    storage: "database.sqlite",
  });
  modelsInit(db);

  console.log("we here do");

  db.sync({ force: false });
}

export * from "./Models/Tag";
export * from "./Models/Post";
