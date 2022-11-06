const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsServices = require('../../../src/services/products.services');
const productControllers = require('../../../src/controllers/products.controllers')
const productsMock = require('../mockTest/mock')

describe('Verifica os controllers de produtos', function () {
  it('Listando os produtos', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'productAll').resolves({ type: 200, message: productsMock });

    await productControllers.productAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock);
  });

  it('Lista o produto pelo id', async function () {
    const res = {};
    const req = { params: { id: 1 }, };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'productById').resolves({ type: 200, message: productsMock[0] });

    await productControllers.productById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock[0]);
  })

  it('Atualização com sucesso em um produto', async function () {
    const res = {};
    const req = { params: { id: 3 }, body: { name: 'productX' } }
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'updateProduct').resolves({ type: 200, message: {id: 3, name: "productX"}});

    await productControllers.updateProduct(req, res)
    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith({ id: 3, name: "productX" })

  })

  it('Testa criação de um produto com sucesso', async function () {
    const res = {};
    const req = { body: { name: 'productX' } }
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'createProduct').resolves({ type: 201, message: productsMock})
    
    await productControllers.createProduct(req, res)
    expect(res.status).to.have.been.calledWith(201)
    expect(res.json).to.have.calledWith({id: productsMock ,name: "productX"})
  })

  it('Testa se item foi deletado com sucesso', async function () {
    const res = {};
    const req = { params: { id: 1 } }
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'deleteProduct').resolves({ type: 204 })
    
    await productControllers.deleteProduct(req, res)
    expect(res.status).to.have.been.calledWith(204)
  })


})

