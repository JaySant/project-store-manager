const { expect } = require('chai');
const sinon = require('sinon')

const saleServices = require('../../../src/services/sales.services');
const salesModel = require('../../../src/models/sales.model')
const salesMock = require('../mockTest/salesMock')

describe('Verifica o service de vendas', function () {
  it('Se retorna a lista de vendas', async function () {
    sinon.stub(salesModel, 'salesAll').resolves(salesMock)
    const product = await saleServices.salesAll()
    expect(product.message).to.deep.equal(salesMock)
  })

  it('Se retorna o id de vendas', async function () {

  })

  it('Se deleta uma venda através do id', async function () {
    
  })

  afterEach(sinon.restore);
})
