const { expect } = require('chai');
const sinon = require('sinon')

const productsServices = require('../../../src/services/products.services');
const productsModel = require('../../../src/models/products.model')
const { productsMock } = require('../mockTest/mock')

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

  it('Verifica no service se o produto foi criado', async function () {
    sinon.stub(productsModel, 'createProduct').resolves(productsMock[0])
    const product = await productsServices.createProduct(productsMock[0].name)
    expect(product.type).to.equal(201)
    expect(product.message).to.deep.equal({ id: 1, name: "Martelo de Thor"})
  })

  it('Verifica no service se o produto foi atualizado', async function () {
    sinon.stub(productsModel, 'updateProduct').resolves(1)
    const product = await productsServices.updateProduct("Capa do batman", 1)
    expect(product.type).to.equal(200)
    expect(product.message).to.deep.equal({id: 1, name: "Capa do batman"})
  })

  it('Verifica no service se o produto foi deletado', async function () {

  })

  afterEach(sinon.restore);
})

