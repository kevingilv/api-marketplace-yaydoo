const Sequelize = require('sequelize');
let database = require('../database/database');

let nametable = 'product';

let product = database.define(nametable, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: { type: Sequelize.INTEGER, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false },
    sku: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.DOUBLE, allowNull: false },
    quantity: { type: Sequelize.INTEGER, allowNull: false }
})

module.exports = product;


