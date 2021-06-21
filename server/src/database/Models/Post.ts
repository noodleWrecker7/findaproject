import { DataTypes, Model, Sequelize } from "sequelize";

export class Post extends Model {
  content!: string;
  title!: string;
  id!: number;
}

export default (sequelize: Sequelize) => {
  Post.init(
    {
      content: { type: DataTypes.TEXT, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { tableName: "posts", sequelize: sequelize }
  );
  // Post.sync({ force: true });
};
