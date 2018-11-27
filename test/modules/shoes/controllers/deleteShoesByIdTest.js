const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const shoesRequest = require('../../../../src/modules/shoes/db/shoes-db');

const shoesRequestMock = sinon.mock(shoesRequest);

describe('Тестирование удаления обуви', () => {
  it('успешное удаление обуви, ожидается пустой объект', () => {
    const shoesId = '23feew4235';
    const shoes = {
      shoesId,
      name: 'asdf',
      description: 'asdfvd',
      price: 123,
      type: 'fb',
    }

    shoesRequestMock.expects('deleteShoesById').returns(Promise.resolve(shoes));

    chai.request(server)
      .delete('/shoes/')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.be.empty;
      })
  })

  it('неуспешное удаление обуви, ожидается объект ошибки', () => {
    shoesRequestMock.expects('deleteShoesById').returns(Promise.reject('db error'));
    chai.request(server)
      .delete('/shoes/')
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('err');
      })
  })
});
