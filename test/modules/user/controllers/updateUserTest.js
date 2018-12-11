const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const userService = require('../../../../src/modules/user/services/user-service');

const userServiceMock = sinon.mock(userService);

describe('Тестирование контроллера обновления данных пользователя', () => {
  describe('', () => {
    it('успешное обновление данных пользователя, ожидается объект пользователя', () => {
      const userId = '23feew4235';
      const user = {
        userId,
        login: 'lop',
        admin: false,
      }
  
      userServiceMock.expects('updateUser').resolves(user);
  
      chai.request(server)
        .put('/users/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('login');
          res.body.should.have.property('admin');
          expect(res.body.login).to.be.equal(user.login);
          expect(res.body.admin).to.be.equal(user.admin);
        })
    })
  })

  describe('', () => {
    it('неуспешное обновление данных пользователя, ожидается объект ошибки', () => {
      const userId = '23feew4235';
  
      userServiceMock.expects('updateUser').rejects('db error');
      chai.request(server)
        .put('/users/')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});
