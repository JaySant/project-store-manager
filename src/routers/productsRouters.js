const express = require('express');
const controller = require('../controllers/products.controllers');
const { validateName } = require('../middlewares/validate');

const router = express.Router();

router.post('/', validateName, controller.createProduct);
router.get('/', controller.productAll);
router.get('/:id', controller.productById);

module.exports = router;