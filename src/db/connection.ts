import { Sequelize } from "sequelize";

/* const sequelize = new Sequelize('almacen', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
}); */

const sequelize = new Sequelize(process.env.DB_NAME || 'bocvzaqxuczfpczv597o', 
                                process.env.DB_USER || 'ujaw2ahd0epqqaoi', 
                                process.env.DB_PASS || 'RhaNQbKwKhmy4VJCKBzu', {
  host: process.env.DB_HOST || 'bocvzaqxuczfpczv597o-mysql.services.clever-cloud.com',
  dialect: 'mysql'
});

export default sequelize;