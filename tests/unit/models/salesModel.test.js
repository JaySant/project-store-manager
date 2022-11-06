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

  afterEach(sinon.restore);
})