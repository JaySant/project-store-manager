const express = require('express');
const controller = require('../controllers/products.controllers');

const router = express.Router();

router.get('/', controller.productAll);
router.get('/:id', controller.productById);

module.exports = router;