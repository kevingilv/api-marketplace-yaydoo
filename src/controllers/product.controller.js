const controller = {};
const ProductApplication = require('../applications/product.app');
const { UNEXPECTED_MESSAGE } = require('../constants');

controller.create = async (req, res) => {
    let response = [];
    try {
        response = await ProductApplication.create(req, res);
    } catch (error) {
        console.log('Error product.controller.create', error);
        return res.status(500).json({ success: false, message: UNEXPECTED_MESSAGE, data: [] });
    }
    res.status(response.statusCode).json({
        success: response.success,
        message: response.message,
        data: response.data,
    });
}
controller.getAll = async (req, res) => {
    let response = [];
    try {
        response = await ProductApplication.getAll(req, res);
    } catch (error) {
        console.log('Error product.controller.getAll', error);
        return res.status(500).json({ success: false, message: UNEXPECTED_MESSAGE, data: [] });
    }
    res.status(response.statusCode).json({
        success: response.success,
        message: response.message,
        data: response.data,
    });
}

controller.getInventory = async (req, res) => {
    let response = [];
    try {
        response = await ProductApplication.getInventory(req, res);
    } catch (error) {
        console.log('Error product.controller.getInventory', error);
        return res.status(500).json({ success: false, message: UNEXPECTED_MESSAGE, data: [] });
    }
    res.status(response.statusCode).json({
        success: response.success,
        message: response.message,
        data: response.data,
    });
}


module.exports = controller;