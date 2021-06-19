import { Sequelize, DataTypes, Model } from 'sequelize'

export class Post extends Model {
}

export default (sequelize: Sequelize) => {
  Post.init(
    {
      author: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: 'servers', sequelize: sequelize }
  )
}


