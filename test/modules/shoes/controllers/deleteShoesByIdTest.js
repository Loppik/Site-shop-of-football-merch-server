const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');
const assert = require('assert')

const shoesRequest = require('../../../../src/modules/shoes/db/shoes-db');

const shoesRequestMock = sinon.mock(shoesRequest);

describe('Тестирование удаления обуви', () => {
  describe('', () => {
    it('успешное удаление обуви, ожидается пустой объект', (done) => {
      const shoesId = '23feew4235';
      const shoes = {
        shoesId,
        name: 'asdf',
        description: 'asdfvd',
        price: 123,
        type: 'fb',
      }
  
      shoesRequestMock.expects('deleteShoesById').resolves(shoes);
  
      chai.request(server)
        .delete('/shoes/' + shoesId)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.empty;
          done();
        })
    })
  })

  describe('', () => {
    it('неуспешное удаление обуви, ожидается объект ошибки', (done) => {
      const shoesId = '23feew4235';
      shoesRequestMock.expects('deleteShoesById').rejects('db error');
      chai.request(server)
        .delete('/shoes/' + shoesId)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
          done();
        })
    })
  })
});
