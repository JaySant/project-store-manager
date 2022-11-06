const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);


const saleServices = require('../../../src/services/sales.services');
const salesControllers = require('../../../src/controllers/sales.controller')
const salesMock = require('../mockTest/salesMock')

describe('Verifica os controllers de vendas', function () {
  it('Listando as vendas', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleServices, 'salesAll').resolves({ type: 200, message: salesMock });

    await salesControllers.salesAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock);
  });

  it('Lista o vendas pelo id no "/sales', async function () {
    const res = {};
    const req = { params: { id: 1 }, };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleServices, 'salesById').resolves({ type: 200, message: salesMock[0] });

    await salesControllers.salesById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock[0]);
  })

  it('Testa se item foi deletado com sucesso', async function () {
    const res = {};
    const req = { params: { id: 1 } }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleServices, 'deleteSale').resolves({ type: 204 })

    await salesControllers.deleteSale(req, res)
    expect(res.status).to.have.been.calledWith(204)
  })

})