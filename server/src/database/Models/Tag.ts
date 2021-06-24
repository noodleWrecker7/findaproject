import { DataTypes, Model, Sequelize } from "sequelize";

/**Individual tags that can be applied to posts*/
export class Tag extends Model {
  name!: string;
  /**Hex string for colour*/
  colour!: string;
  id!: number;
}

export default (sequelize: Sequelize) => {
  Tag.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      colour: { type: DataTypes.STRING, allowNull: false },
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { tableName: "tags", sequelize: sequelize }
  );
  console.log(Tag);
};
