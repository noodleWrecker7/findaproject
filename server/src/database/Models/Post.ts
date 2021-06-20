import { DataTypes, Model, Sequelize } from "sequelize";

export class Post extends Model {
  author!: string
  content!: string
}
export default (sequelize: Sequelize) => {
  Post.init(
    {
      author: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: 'posts', sequelize: sequelize }
  )

}
