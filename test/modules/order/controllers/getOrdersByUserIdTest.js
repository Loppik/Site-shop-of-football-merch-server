const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const orderRequest = require('../../../../src/modules/order/db/order-db');

const orderRequestMock = sinon.mock(orderRequest);

describe('Тестирование контроллера получение заказов пользователя', () => {
  describe('', () => {
    it('успешное получение заказов пользователя, ожидается массив заказов', () => {
      const orders = [
        {
          userId: 'asd32ffr4',
          info: 'asdfvd',
        }, 
        {
          userId: 'asd32ffr4',
          info: 'asdasdfagfvd',
        }
      ]
  
      orderRequestMock.expects('getOrdersByUserId').resolves(orders);
      chai.request(server)
        .get('/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.forEach((o) => {
            o.should.have.property('userId');
            o.should.have.property('info');
          })
        })
    })
  })


  describe('', () => {
    it('неуспешное получение заказов пользователя, ожидается объект ошибки', () => {
      orderRequestMock.expects('getOrdersByUserId').rejects('db error');
      chai.request(server)
        .get('/orders')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});

