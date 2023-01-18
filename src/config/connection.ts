import {  Sequelize } from "sequelize";

export const sequelize = new Sequelize("photo-gallery-db", "sa", "8tDhj#o3f&2$@", {
    host: "localhost",
    dialect: "mssql",
  });