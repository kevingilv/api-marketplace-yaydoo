let sequelize = require('../database/database');
let product = require('../models/product');
let user = require('../models/user');

sequelize.sync();

async function create(req, res) {
    let userExists = [];
    let response = {
        "data": [],
        "message": '',
        "success": false,
        "statusCode": 200,
    }
    let { email, name, sku, price, quantity } = req.body;
    if (email == '' || name == '', sku == '',
        price == 0, quantity == 0 ||
        price == '', quantity == '') {
        response.message = 'No deben haber campos vacios';
        return response;
    }

    userExists = await user.findOne({
        where: {
            email: email
        }
    });

    if (userExists === null) {
        response.message = 'Ocurrió un error. No se encontró el usuario.';
        return response;
    }

    const productCreated = await product.create({
        userId: userExists.id,
        name,
        sku,
        price,
        quantity
    });
    response.success = true;
    response.data = productCreated;

    return response;
}

async function getAll(req, res) {
    let allProducts = [];
    let response = {
        "data": [],
        "message": '',
        "success": true,
        "statusCode": 200,
    }
    allProducts = await product.findAll({});
    response.data = allProducts;
    return response;
}

async function getInventory(req, res) {
    let inventory = [];
    let userExists = {};
    let response = {
        "data": [],
        "message": '',
        "success": true,
        "statusCode": 200,
    }

    const { email } = req.body;

    console.log('EMAILLL', email)

    if (email == '') {
        response.message = 'Ocurrió un error.';
        return response;
    }

    userExists = await findUserByEmail(email);

    if (userExists === null) {
        response.message = 'Ocurrió un error. No se encontró el usuario.';
        return response;
    }

    if (userExists.isAdmin) {
        inventory = await product.findAll({});
        response.data = inventory;
    } else {
        inventory = await product.findAll({
            where: {
                userId: userExists.id
            }
        });
    }

    response.success = true;
    response.data = inventory;
    return response;
}

async function findUserByEmail(email) {
    return await user.findOne({
        where: {
            email: email
        }
    });
}


module.exports = { create, getAll, getInventory }