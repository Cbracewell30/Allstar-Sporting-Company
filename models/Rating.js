const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rate extends Model {}

Rate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "rate",
  }
);

module.exports = Rate;
