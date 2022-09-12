const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const BASE = '/product/'

router.post(`${BASE}create`, ProductController.create);
router.get(`${BASE}get-all`, ProductController.getAll);
router.post(`${BASE}get-inventory`, ProductController.getInventory);

module.exports = router;