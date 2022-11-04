const { expect } = require('chai');
const sinon = require('sinon')

const productsServices = require('../../../src/services/products.services');
const productsModel = require('../../../src/models/products.model')
const productsMock = require('../mockTest/mock')

describe('Verifica o service de produtos', function () {
  it('Se retorna a lista de produtos', async function () {
    sinon.stub(productsModel, 'productAll').resolves(productsMock)
    const product = await productsServices.productAll()
    expect(product.message).to.deep.equal(productsMock)
  })
  it('Se retorna mensagem de erro caso o produto não exista', async function () {
    sinon.stub(productsModel, 'productById').resolves(undefined)
    const product = await productsServices.productById(3)
    expect(product.type).to.equal(404)
    expect(product.message).to.deep.equal({ message: 'Product not found' })
  })
  it('Se o produto existe', async function () {
    sinon.stub(productsModel, 'productById').resolves(productsMock[0])
    const product = await productsServices.productById(1)
    expect(product.type).to.equal(200)
    expect(product.message).to.deep.equal(productsMock[0])

  })
  afterEach(sinon.restore);
})

