const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Store = require("./store");
const bcrypt = require("bcrypt");

class User extends Model {}

Store.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    store_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Store",
        key: "id",
      },
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate sets the value on the password beofre saving it.
      // async function allows it to run simultaneously with other functions as a promise
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
