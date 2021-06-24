import "source-map-support/register";
import { Sequelize } from "sequelize";
import PostInit, { Post } from "./Post";
import TagInit, { Tag } from "./Tag";
import UserInit, { User } from "./User";

/**Initializes all models and associations*/
export default (sequelize: Sequelize) => {
  console.log("yo");
  TagInit(sequelize);
  PostInit(sequelize);
  UserInit(sequelize);

  Post.belongsToMany(Tag, { through: "post_tag" });
  Tag.belongsToMany(Post, { through: "post_tag" });
  Post.belongsTo(User);
  User.hasMany(Post);
};
