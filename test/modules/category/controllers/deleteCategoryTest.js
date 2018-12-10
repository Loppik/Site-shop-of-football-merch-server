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
describe('Тестирование удаления категории', () => {
  describe('', () => {
    it('успешное удаление категории, ожидается пустой объект', () => {
      const category = {
        name: 'wer',
        routeName: 'w'
      }
  
      categoryRequestMock.expects('deleteCategory').resolves(category);
      chai.request(server)
        .del('/categories/' + categoryId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          expect(res.body).to.be.empty;
        })
    })
  })


  describe('', () => {
    it('неуспешное удаление категории, ожидается объект ошибки', () => {
      categoryRequestMock.expects('deleteCategory').rejects('db error');
      chai.request(server)
        .del('/categories/' + categoryId)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});

