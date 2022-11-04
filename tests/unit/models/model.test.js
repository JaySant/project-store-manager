const { expect } = require('chai');
const sinon = require('sinon')

const productsModel = require('../../../src/models/products.model');
const productsMock = require('../mockTest/mock')
const connection = require('../../../src/models/connection')

describe('Testa a listagem de produtos', function () {
    it('Testa se lista de produtos é mostrada', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock])
      const product = await productsModel.productAll();
      expect(product).to.deep.equal(productsMock)
    })
  
    it('Encontra um produto pelo ID ', async function () {
      const id = 1
      sinon.stub(connection, 'execute').resolves([[productsMock[0]]])
      const productId = await productsModel.productById(id)
      expect(productId).to.deep.equal(productsMock[0])
    })
 
  afterEach(sinon.restore);
})

