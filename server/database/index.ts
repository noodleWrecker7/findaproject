import { Sequelize } from 'sequelize'
import Models, { Post } from './Models'

/**
 * Initialise db connection*/
export const db = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  storage: 'database.sqlite'
})

Models(db)

db.sync().then()


