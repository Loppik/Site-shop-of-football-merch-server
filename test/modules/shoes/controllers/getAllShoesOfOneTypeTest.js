const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const shoesService = require('../../../../src/modules/shoes/services/shoes-service');

const shoesServiceMock = sinon.mock(shoesService);

describe('Тестирование получения всей обуви одного типа', () => {
  describe('', () => {
    it('успешное получение всей обуви одного типа, ожидается массив обуви', () => {
      const type = 'fb';
      const shoes = [
        {
          name: 'asdf',
          description: 'asdfvd',
          price: 123,
          type,
        },
        {
          name: 'asdfg',
          description: 'sadfasdfvd',
          price: 1523,
          type,
        }
      ];
      shoesServiceMock.expects('getAllShoesOfOneType').resolves(shoes);
      chai.request(server)
        .get('/shoes/ct/' + type)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('shoes');
          res.body.shoes.should.be.an('array');
          res.body.shoes.forEach((el) => {
            el.should.have.property('type');
            expect(el.type).to.be.equal(type);
          });
        })
    })
  })

  describe('', () => {
    it('неуспешное получение всей обуви одного типа, ожидается объект ошибки', () => {
      const type = 'fb';
      
      shoesServiceMock.expects('getAllShoesOfOneType').rejects('db error');
      chai.request(server)
        .get('/shoes/ct' + type)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});
