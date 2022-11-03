const products = require('../models/products.model');

const status = {
  SUCCESS: 200,
  PRODUCT_NOT_FOUND: 404,
};

const productAll = async () => {
  const result = await products.productAll();
  return { type: status.SUCCESS, message: result };
};

const productById = async (id) => {
  const result = await products.productById(id);
  if (result) return { type: status.SUCCESS, message: result };
  return { type: status.PRODUCT_NOT_FOUND, message: { message: 'Product not found' } };
};

module.exports = {
  productAll,
  productById,
};