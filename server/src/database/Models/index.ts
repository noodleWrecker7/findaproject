import 'source-map-support/register'
import { Sequelize, DataTypes, Model } from 'sequelize'
import PostInit, { Post } from "./Post";
import TagInit, { Tag } from "./Tag";
import UserInit, { User } from "./User"

export default (sequelize: Sequelize) => {
  console.log("yo")
  TagInit(sequelize)
  PostInit(sequelize)
  UserInit(sequelize)

  Post.belongsToMany(Tag, {through: 'post_tag'})
  Tag.belongsToMany(Post, {through: 'post_tag'})
  Post.belongsTo(User)
}





