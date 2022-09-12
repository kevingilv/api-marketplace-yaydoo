const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const BASE = '/product/'

router.post(`${BASE}create`, ProductController.create);

module.exports = router;