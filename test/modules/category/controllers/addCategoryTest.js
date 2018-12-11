const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const categoryService = require('../../../../src/modules/category/services/category-service');

const categoryServiceMock = sinon.mock(categoryService);

describe('Тестирование контроллера добавления категории', () => {
  describe('', () => {
    it('успешное добавление категории, ожидается объект категории', () => {
      const category = {
        name: 'asdf',
        routeName: 'asdfvd',
      }
  
      categoryServiceMock.expects('addCategory').resolves(category);
      chai.request(server)
        .post('/categories/')
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
    it('неуспешное добавление категории, ожидается объект ошибки', () => {
      categoryServiceMock.expects('addCategory').rejects('db error');
      chai.request(server)
        .post('/categories/')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});


