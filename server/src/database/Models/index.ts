import 'source-map-support/register'
import { Sequelize, DataTypes, Model } from 'sequelize'
import PostInit, { Post } from "./Post";
import TagInit, { Tag } from "./Tag";

export default (sequelize: Sequelize) => {
  console.log("yo")
  TagInit(sequelize)
  PostInit(sequelize)


  Post.belongsToMany(Tag, {through: 'post_tag'})
  Tag.belongsToMany(Post, {through: 'post_tag'})
}





