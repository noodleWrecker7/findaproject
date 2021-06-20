import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {
  username!: string
  hash!: string
  salt!: string
  id!: number
}

export default (sequelize: Sequelize) => {
  User.init(
    {
      username: {type: DataTypes.STRING, allowNull: false, unique:true},
      hash: {type: DataTypes.STRING, allowNull: false},
      salt: {type: DataTypes.STRING, allowNull: false},
      id: {type: DataTypes.INTEGER, unique:true, primaryKey: true, autoIncrement: true}
    },
    {tableName: 'users', sequelize: sequelize})
  console.log(User)

}

