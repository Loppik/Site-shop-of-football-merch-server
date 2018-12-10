const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const sizeService = require('../../../../src/modules/size/services/size-service');

const sizeServiceMock = sinon.mock(sizeService);

describe('Тестирование получения размеров обуви', () => {
  describe('', () => {
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
      sizeServiceMock.expects('getSizesByShoesId').resolves(sizes);
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
  })

  describe('', () => {
    it('неуспешное получение размеров обуви, ожидается объект ошибки', () => {
      const shoesId = 'wr235ewf';
      
      sizeServiceMock.expects('getSizesByShoesId').rejects('db error');
      chai.request(server)
        .get('/sizes/' + shoesId)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});
