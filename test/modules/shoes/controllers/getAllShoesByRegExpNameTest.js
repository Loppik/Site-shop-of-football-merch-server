const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const shoesRequest = require('../../../../src/modules/shoes/db/shoes-db');

const shoesRequestMock = sinon.mock(shoesRequest);

describe('Тестирование контроллера получения всей обуви по регулярному выражению', () => {
  describe('', () => {
    it('успешное получение всей обуви по регулярному выражению, ожидается массив обуви', () => {
      const shoes = [
        {
          name: 'asdf',
          description: 'asdfvd',
          price: 123,
          type: 'fb',
        },
        {
          name: 'asdfg',
          description: 'sadfasdfvd',
          price: 1523,
          type: 'forRun',
        }
      ];
      shoesRequestMock.expects('getAllShoesByRegExpName').resolves(shoes);
      chai.request(server)
        .get('/shoes/find/reg')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('shoes');
          res.body.shoes.should.be.an('array');
        })
    })
  })

  describe('', () => {
    it('неуспешное получение всей обуви по регулярному выражению, ожидается объект ошибки', () => {
      const type = 'fb';
      
      shoesRequestMock.expects('getAllShoesByRegExpName').rejects('db error');
      chai.request(server)
        .get('/shoes/find/reg')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});
