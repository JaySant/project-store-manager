const service = require('../services/products.services');

const productAll = async (_req, res) => {
  const result = await service.productAll();
  return res.status(result.type).json(result.message);
};

const productById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await service.productById(id);
  return res.status(result.type).json(result.message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const result = await service.createProduct(name);
  return res.status(result.type).json({ id: result.message, name });
};

module.exports = {
  productAll,
  productById,
  createProduct,
};
