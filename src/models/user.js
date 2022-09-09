const Sequelize = require('sequelize');
let database = require('../database/database');

let nametable = 'user';

let user = database.define(nametable, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false }
})

module.exports = user;


