const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const shoesRequest = require('../../../../src/modules/shoes/db/shoes-db');

const shoesRequestMock = sinon.mock(shoesRequest);

describe('Тестирование получения обуви', () => {
  it('успешное получение обуви, ожидается пустой объект', () => {
    const shoes = {
      name: 'asdf',
      description: 'asdfvd',
      price: 123,
      type: 'fb',
    }

    shoesRequestMock.expects('addShoes').resolves(shoes);

    chai.request(server)
      .post('/shoes/')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.be.empty;
      })
  })

  it('неуспешное получение обуви, ожидается объект ошибки', () => {
    shoesRequestMock.expects('addShoes').rejects('db error');

    chai.request(server)
      .post('/shoes/')
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('err');
      })
  })
});
