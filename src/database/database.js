let Sequelize = require('sequelize');
const mysql2 = require('mysql2');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectModule: mysql2,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    }
);

module.exports = sequelize;