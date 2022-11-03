const service = require('../services/products.services');

const productAll = async (_req, res) => {
  const result = await service.productAll();
  return res.status(result.type).json(result.message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const result = await service.productById(id);
  return res.status(result.type).json(result.message);
};

module.exports = {
  productAll,
  productById,
};
