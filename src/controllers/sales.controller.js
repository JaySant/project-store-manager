const serviceSales = require('../services/sales.services');

const salesAll = async (_req, res) => {
  const result = await serviceSales.salesAll();
  return res.status(result.type).json(result.message);
};

const salesById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await serviceSales.salesById(id);
  return res.status(result.type).json(result.message);
};

const deleteSale = async (req, res) => {
  const id = Number(req.params.id);
  const result = await serviceSales.deleteSale(id);
  return res.status(result.type).json(result.message);
};

module.exports = {
  salesAll,
  salesById,
  deleteSale,
};