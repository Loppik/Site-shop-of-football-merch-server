const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const categoryRequest = require('../../../../src/modules/category/db/category-db');

const categoryRequestMock = sinon.mock(categoryRequest);

describe('Тестирование получения всех категорий', () => {
  it('успешное получение всех категорий, ожидается массив категорий', () => {
    const categories = [
      {
        name: 'asdf',
        description: 'asdfvd',
      },
      {
        name: 'asdfg',
        description: 'sadfasdfvd',
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


  it('неуспешное получение всех категорий, ожидается объект ошибки', () => {
    categoryRequestMock.expects('getCategories').rejects('db error');
    chai.request(server)
      .get('/categories/')
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('err');
      })
  })
});

