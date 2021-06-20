import { DataTypes, Model, Sequelize } from "sequelize";

export class Tag extends Model {
  name!: string
  /**Hex string for colour*/
  colour!: string
}

export default (sequelize: Sequelize) => {
  Tag.init(
    {
      name: {type: DataTypes.STRING, allowNull: false},
      colour: {type: DataTypes.STRING, allowNull: false},
    },
    {tableName: 'tags', sequelize: sequelize})
  console.log(Tag)

}
