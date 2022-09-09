let sequelize = require('../database/database');
let user = require('../models/user');

sequelize.sync();

async function login(req, res) {
    let data = [{ 'login': 'test' }];

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    return data;
}

module.exports = { login }