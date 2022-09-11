const controller = {};
const UserApplication = require('../applications/user.app');
const { UNEXPECTED_MESSAGE } = require('../constants');

controller.login = async (req, res) => {
    let response = [];
    try {
        response = await UserApplication.login(req, res);
    } catch (error) {
        console.log('Error user.controller.login', error);
        return res.status(500).json({ success: false, message: UNEXPECTED_MESSAGE, data: [] });
    }
    res.status(response.statusCode).json({
        success: response.success,
        message: response.message,
        data: response.data,
    });
}

controller.create = async (req, res) => {
    let response = [];
    try {
        response = await UserApplication.create(req, res);
    } catch (error) {
        console.log('Error user.controller.create', error);
        return res.status(500).json({ success: false, message: UNEXPECTED_MESSAGE, data: [] });
    }
    res.status(response.statusCode).json({
        success: response.success,
        message: response.message,
        data: response.data,
    });
}

module.exports = controller;