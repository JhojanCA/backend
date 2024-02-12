"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/* const sequelize = new Sequelize('almacen', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
}); */
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'bocvzaqxuczfpczv597o', process.env.DB_USER || 'ujaw2ahd0epqqaoi', process.env.DB_PASS || 'RhaNQbKwKhmy4VJCKBzu', {
    host: process.env.DB_HOST || 'bocvzaqxuczfpczv597o-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});
exports.default = sequelize;
