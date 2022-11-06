const { expect } = require('chai');
const sinon = require('sinon')

const salesModel = require('../../../src/models/sales.model')
const { salesMock } = require('../mockTest/salesMock')
const connection = require('../../../src/models/connection')

describe('Testa a listagem de vendas', function () {
  it('Testa se lista de vendas é mostrada', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock])
    const product = await salesModel.salesAll();
    expect(product).to.deep.equal(salesMock)
  })

  it('Encontra uma venda pelo ID ', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock]);
    const id = 1
    const response = await salesModel.salesById(id)
    expect(response).to.deep.equal(salesMock)
  })

  it('Testa se exclui uma venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{affectedRows: 1}])
    const response = await salesModel.deleteSale(salesMock)
    expect(response).to.equal(1)
  })

  afterEach(sinon.restore);
})