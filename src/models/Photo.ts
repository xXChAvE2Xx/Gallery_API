import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../config/connection";

const Photo = sequelize.define("Photo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  imagePath: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false
});

export default Photo;
