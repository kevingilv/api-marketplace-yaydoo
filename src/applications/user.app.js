let sequelize = require('../database/database');
let user = require('../models/user');
let { encrypt, compare } = require('../util/auth');

sequelize.sync();

async function login(req, res) {
    let data = [];
    let response = {
        "data": [],
        "message": '',
        "success": false,
        "statusCode": 200,
    }
    let { email, password } = req.body;

    if (email == '' || password == '') {
        response.message = 'No deben haber campos vacíos';
        return response;
    }

    data = await user.findOne({
        where: {
            email: email
        }
    });

    if (data === null) {
        response.message = 'El usuario no existe';
        return response;
    }
    const isSamePassword = await compare(password, data.password);

    if (!isSamePassword) {
        response.message = 'La contraseña es incorrecta';
        return response;
    } else {
        response.success = true;
        response.data = {
            "id": data.id,
            "email": data.email,
        }
    }
    return response;
}

async function create(req, res) {
    let response = {
        "data": [],
        "message": '',
        "success": false,
        "statusCode": 200,
    }
    let userExists = [];
    let { email, password, confirmPassword } = req.body;

    if (email == '' || password == '' ||
        confirmPassword == '') {
        response.message = 'No deben haber campos vacíos';
        return response;
    }

    if (password !== confirmPassword) {
        response.message = 'Las contraseñas no coinciden';
        return response;
    }

    userExists = await user.findOne({
        where: { email: email }
    }).then(function (user) {
        return user;
    }).catch(error => {
        console.log(`Error comparing user: ${error}`);
        return error;
    });

    if (userExists !== null) {
        response.message = 'El usuario ya existe.';
        return response;
    }

    const hashPassword = await encrypt(password);

    const userCreated =  await user.create({
        email: email,
        password: hashPassword,
        isAdmin: false,
    }).then(function (data) {
        return data;
    }).catch(error => {
        console.log(`Error creating user: ${error}`);
        return error;
    });

    response.success = true;
    response.data = {
        "id": userCreated.id,
        "email": userCreated.email
    }
    return response;
}

module.exports = { login, create }