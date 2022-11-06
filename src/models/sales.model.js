const camelize = require('camelize');
const connection = require('./connection');

const salesAll = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity 
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON sp.sale_id = s.id`,
  );
  return camelize(result);
};

const salesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id, quantity 
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON sp.sale_id = s.id
    WHERE sale_id = ?`, [id],
  );
  return camelize(result);
};

const deleteSale = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?', [id],
  );
  return affectedRows;
};

module.exports = {
  salesAll,
  salesById,
  deleteSale,
};