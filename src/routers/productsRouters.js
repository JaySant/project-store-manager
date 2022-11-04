const express = require('express');
const controller = require('../controllers/products.controllers');

const router = express.Router();

router.post('/', controller.createProduct);
router.get('/', controller.productAll);
router.get('/:id', controller.productById);

module.exports = router;