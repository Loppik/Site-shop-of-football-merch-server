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
describe('Тестирование контроллера обновления категории', () => {
  describe('', () => {
    it('успешное обновление категории, ожидается объект категории', () => {
      const category = {
        name: 'wer',
        routeName: 'w'
      }
  
      categoryRequestMock.expects('updateCategoryById').resolves(category);
      chai.request(server)
        .put('/categories')
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
    it('неуспешное обновление категории, ожидается объект ошибки', () => {
      categoryRequestMock.expects('updateCategoryById').rejects('db error');
      chai.request(server)
        .put('/categories')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});

