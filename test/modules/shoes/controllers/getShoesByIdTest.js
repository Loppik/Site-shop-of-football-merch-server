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
  describe('', () => {
    it('успешное получение обуви, ожидается объект обуви', () => {
      const shoesId = '23feew4235';
      const shoes = {
        shoesId,
        name: 'asdf',
        description: 'asdfvd',
        price: 123,
        type: 'fb',
      }
  
      shoesRequestMock.expects('getShoesById').resolves(shoes);
  
      chai.request(server)
        .get('/shoes/' + shoesId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('shoes');
          res.body.shoes.should.be.an('object');
          res.body.shoes.should.have.property('shoesId');
          expect(res.body.shoes.shoesId).to.be.equal(shoesId);
        })
    })
  })

  describe('', () => {
    it('неуспешное получение всей обуви одного типа, ожидается объект ошибки', () => {
      const shoesId = '23feew4235';
  
      shoesRequestMock.expects('getShoesById').rejects('db error');
      chai.request(server)
        .get('/shoes/' + shoesId)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});
