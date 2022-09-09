let Sequelize = require('sequelize');
const mysql2 = require('mysql2');
const sequelize = new Sequelize(
    'marketplace',
    '08m0pc9h3psz39yb980i',
    'pscale_pw_f6Rv6IoYMW4DVRfCxkx3WugvtyulbQ6gBQFPJyZrHTu',
    {
        host: 'us-east.connect.psdb.cloud',
        dialect: 'mysql',
        dialectModule: mysql2,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    }
);
// const sequelize = new Sequelize(
//     'mydatabase',
//     'root',
//     '',
//     {
//         host: 'localhost',
//         dialect: 'mysql'
//     }
// );

module.exports = sequelize;