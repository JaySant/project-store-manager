const salesModel = require('../models/sales.model');

const status = {
  SUCCESS: 200,
  PRODUCT_NOT_FOUND: 404,
  DELETE_PRODUCT: 204,
};

const salesAll = async () => {
  const result = await salesModel.salesAll();
  return { type: status.SUCCESS, message: result };
};

const salesById = async (id) => {
  const result = await salesModel.salesById(id);
  if (result.length < 1) {
 return {
    type: status.PRODUCT_NOT_FOUND, message: { message: 'Sale not found' },
  }; 
}
  return { type: status.SUCCESS, message: result };
};

const deleteSale = async (id) => {
  const result = await salesModel.deleteSale(id);
  if (result > 0) return { type: status.DELETE_PRODUCT };
  return { type: status.PRODUCT_NOT_FOUND, message: { message: 'Sale not found' } };
};

module.exports = {
  salesAll,
  salesById,
  deleteSale,
};