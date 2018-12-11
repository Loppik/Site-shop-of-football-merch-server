const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const categoryRequest = require('../../../../src/modules/category/db/category-db');

const categoryRequestMock = sinon.mock(categoryRequest);

describe('Тестирование контроллера получения всех категорий', () => {
  describe('', () => {
    it('успешное получение всех категорий, ожидается массив категорий', () => {
      const categories = [
        {
          name: 'asdf',
          routeName: 'asdfvd',
        },
        {
          name: 'asdfg',
          routeName: 'sadfasdfvd',
        }
      ];
      categoryRequestMock.expects('getCategories').resolves(categories);
      chai.request(server)
        .get('/categories/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('categories');
          res.body.categories.should.be.an('array');
        })
    })
  })


  describe('', () => {
    it('неуспешное получение всех категорий, ожидается объект ошибки', () => {
      categoryRequestMock.expects('getCategories').rejects('db error');
      chai.request(server)
        .get('/categories/')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});

