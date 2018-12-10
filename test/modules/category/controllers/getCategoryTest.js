const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const categoryRequest = require('../../../../src/modules/category/db/category-db');

const categoryRequestMock = sinon.mock(categoryRequest);

const categoryId = '54fs32245';
describe('Тестирование получения категории', () => {
  describe('', () => {
    it('успешное получение категории, ожидается объект категории', () => {
      const category = {
        name: 'wer',
        routeName: 'w'
      }
  
      categoryRequestMock.expects('getCategory').resolves(category);
      chai.request(server)
        .get('/categories/' + categoryId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('category');
          res.body.category.should.be.an('object');
          res.body.category.should.have.property('name');
          res.body.category.should.have.property('routeName');
          expect(res.body.category.name).to.be.equal(category.name);
          expect(res.body.category.routeName).to.be.equal(category.routeName);
        })
    })
  })


  describe('', () => {
    it('неуспешное получение категории, ожидается объект ошибки', () => {
      categoryRequestMock.expects('getCategory').rejects('db error');
      chai.request(server)
        .get('/categories/' + categoryId)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});

