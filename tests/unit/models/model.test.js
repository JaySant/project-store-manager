const { expect } = require('chai');
const sinon = require('sinon')

const productsModel = require('../../../src/models/products.model');
const {productsMock, productNew} = require('../mockTest/mock')
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
  
  it('Cadastrando um produto novo', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    const result = await productsModel.createProduct(productNew);
    expect(result).to.equal(42);
  });

  it('Realiza um UPDATE com model', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }])
    const response = await productsModel.updateProduct(productsMock)
    expect(response).to.equal(1)
  })


  it('Testa se exclui um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }])
    const response = await productsModel.deleteProduct(productsMock)
    expect(response).to.equal(1)
  })

 
  afterEach(sinon.restore);
})

