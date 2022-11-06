const express = require('express');
const controlleSales = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', controlleSales.salesAll);
router.get('/:id', controlleSales.salesById);
router.delete('/:id', controlleSales.deleteSale);

module.exports = router;