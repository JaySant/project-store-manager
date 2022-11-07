const products = require('../models/products.model');

const status = {
  SUCCESS: 200,
  PRODUCT_NOT_FOUND: 404,
  CREATE_PRODUCT: 201,
  DELETE_PRODUCT: 204,
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

const updateProduct = async (name, id) => {
  const result = await products.updateProduct(name, id);
  if (result > 0) return { type: status.SUCCESS, message: { id, name } };
  return { type: status.PRODUCT_NOT_FOUND, message: { message: 'Product not found' } };
};

const deleteProduct = async (id) => {
  const result = await products.deleteProduct(id);
  if (result > 0) return { type: status.DELETE_PRODUCT };
  return { type: status.PRODUCT_NOT_FOUND, message: { message: 'Product not found' } };
};

const searchName = async (query) => {
  const result = await products.searchName(query);
  if (result.length > 0) return { type: status.SUCCESS, message: result };
  return { type: status.PRODUCT_NOT_FOUND, message: { message: 'Product not found' } };
};

module.exports = {
  productAll,
  productById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchName,
};