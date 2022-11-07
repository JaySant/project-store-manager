const express = require('express');
const controller = require('../controllers/products.controllers');
const { validateName } = require('../middlewares/validate');

const router = express.Router();

router.post('/', validateName, controller.createProduct);
router.put('/:id', validateName, controller.updateProduct);
router.get('/', controller.productAll);
router.get('/search', controller.searchName);
router.get('/:id', controller.productById);
router.delete('/:id', controller.deleteProduct);

module.exports = router;