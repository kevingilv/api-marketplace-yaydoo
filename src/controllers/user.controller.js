const controller = {};
const UserApplication = require('../applications/user.app');

controller.login = async (req, res) => {
    let data = [];
    try {
        data = await UserApplication.login(req, res);
    } catch (error) {
        console.log('Error user.controller.login', error);
        return res.status(500).json({ success: false, message: 'Ocurrió un error inesperado', data: [] });
    }
    res.status(200).json({ success: true, message: '', data: data, });
}

module.exports = controller;