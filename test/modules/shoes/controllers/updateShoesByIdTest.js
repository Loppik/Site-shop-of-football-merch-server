const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const shoesRequest = require('../../../../src/modules/shoes/db/shoes-db');

const shoesRequestMock = sinon.mock(shoesRequest);

describe('Тестирование контроллера изменения данных обуви', () => {
  describe('', () => {
    it('успешное изменение данных обуви, ожидается пустой объект', () => {
      const shoes = {
        shoesId: '34rfe345',
        name: 'asdf',
        description: 'asdfvd',
        price: 123,
        type: 'fb',
      }
  
      shoesRequestMock.expects('updateShoesById').resolves(shoes);
  
      chai.request(server)
        .put('/shoes/')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.empty;
        })
    })
  })

  describe('', () => {
    it('неуспешное изменение данных обуви, ожидается объект ошибки', () => {
      shoesRequestMock.expects('updateShoesById').rejects('db error');
  
      chai.request(server)
        .put('/shoes/')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});
