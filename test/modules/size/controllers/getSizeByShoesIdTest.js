const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const sizeRequest = require('../../../../src/modules/size/db/size-db');

const sizeRequestMock = sinon.mock(sizeRequest);

describe('Тестирование получения размеров обуви', () => {
  it('успешное получение размеров обуви, ожидается массив размеров', () => {
    const shoesId = 'wr235ewf';
    const sizes = [
      {
        shoesId,
        size: '43',
        count: 2,
      },
      {
        shoesId,
        size: '42',
        count: 4,
      }
    ];
    sizeRequestMock.expects('getSizesByShoesId').returns(Promise.resolve(sizes));
    chai.request(server)
      .get('/sizes/' + shoesId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('sizes');
        res.body.sizes.should.be.an('array');
        res.body.sizes.forEach((el) => {
          expect(el.shoesId).equal(shoesId);
        })
      })
  })

  it('неуспешное получение размеров обуви, ожидается объект ошибки', () => {
    const shoesId = 'wr235ewf';
    
    sizeRequestMock.expects('getSizesByShoesId').returns(Promise.reject('db error'));
    chai.request(server)
      .get('/sizes/' + shoesId)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('err');
      })
  })
});
