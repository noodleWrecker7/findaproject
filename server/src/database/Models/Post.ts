import { DataTypes, Model, Sequelize } from "sequelize";

export class Post extends Model {
  author!: string
  content!: string
  title!: string
  id!: number
}
export default (sequelize: Sequelize) => {
  Post.init(
    {
      author: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      id: {type: DataTypes.INTEGER, unique:true, primaryKey: true, autoIncrement: true}
    },
    { tableName: 'posts', sequelize: sequelize }
  )

}
