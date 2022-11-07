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

const updateProduct = async (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const result = await service.updateProduct(name, id);
  return res.status(result.type).json(result.message);
};

const deleteProduct = async (req, res) => {
  const id = Number(req.params.id);
  const result = await service.deleteProduct(id);
  return res.status(result.type).json(result.message);
};

const searchName = async (req, res) => {
  const { q } = req.query;
  const result = await service.searchName(q);
  return res.status(result.type).json(result.message);
};

module.exports = {
  productAll,
  productById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchName,
};
