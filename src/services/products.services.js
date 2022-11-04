const products = require('../models/products.model');

const status = {
  SUCCESS: 200,
  PRODUCT_NOT_FOUND: 404,
  CREATE_PRODUCT: 201,
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

const createProduct = async (product) => {
  const result = await products.createProduct(product);
   return { type: status.CREATE_PRODUCT, message: result };
};

module.exports = {
  productAll,
  productById,
  createProduct,
};