const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const userRequest = require('../../../../src/modules/user/db/user-db');

const userRequestMock = sinon.mock(userRequest);

describe('Тестирование контроллера получения пользователя', () => {
  describe('', () => {
    it('успешное получение пользователя, ожидается объект пользователя', () => {
      const userId = '23feew4235';
      const user = {
        userId,
        login: 'lop',
        admin: false,
      }
  
      userRequestMock.expects('getUserById').resolves(user);
  
      chai.request(server)
        .get('/users/')
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
    it('неуспешное получение пользователя, ожидается объект ошибки', () => {
      const userId = '23feew4235';
  
      userRequestMock.expects('getUserById').rejects('db error');
      chai.request(server)
        .get('/users/')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
      userRequestMock.restore();
    })
  })
});
