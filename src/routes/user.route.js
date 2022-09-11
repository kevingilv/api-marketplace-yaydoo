const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const BASE = '/user/'

router.post(`${BASE}login`, UserController.login);
router.post(`${BASE}create`, UserController.create);

module.exports = router;