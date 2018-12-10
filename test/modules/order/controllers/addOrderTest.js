const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const orderService = require('../../../../src/modules/order/service/order-service');

const orderServiceMock = sinon.mock(orderService);

describe('Тестирование добавления заказа', () => {
  describe('', () => {
    it('успешное добавление заказа, ожидается объект заказа', () => {
      const order = {
        userId: 'asd32ffr4',
        info: 'asdfvd',
      }
  
      orderServiceMock.expects('addOrder').resolves(order);
      chai.request(server)
        .post('/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('order');
          res.body.order.should.be.an('object');
          res.body.order.should.have.property('userId');
          res.body.order.should.have.property('info');
          expect(res.body.order.userId).to.be.equal(order.userId);
          expect(res.body.order.info).to.be.equal(order.info);
        })
    })
  })


  describe('', () => {
    it('неуспешное добавление заказа, ожидается объект ошибки', () => {
      orderServiceMock.expects('addOrder').rejects('db error');
      chai.request(server)
        .post('/orders')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});

