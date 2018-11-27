const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const userRequest = require('../../../../src/modules/user/db/user-db');
const parseToken = require('../../../../src/modules/token');

const userRequestMock = sinon.mock(userRequest);
const parseTokenMock = sinon.mock(parseToken);

describe('Тестирование получения пользователя', () => {
  it('успешное получение пользователя, ожидается объект пользователя', () => {
    const userId = '23feew4235';
    const user = {
      userId,
      login: 'lop',
      admin: false,
    }

    userRequestMock.expects('getUserById').returns(Promise.resolve(user));
    parseTokenMock.expects('parseToken').returns

    chai.request(server)
      .get('/users/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('login');
        res.body.should.have.property('admin');
        res.body.should.have.property('userId');
        expect(res.body.userId).to.be.equal(userId);
      })
  })

  it('неуспешное получение пользователя, ожидается объект ошибки', () => {
    const userId = '23feew4235';

    userRequestMock.expects('getUserById').returns(Promise.reject('db error'));
    chai.request(server)
      .get('/users/')
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('err');
      })
  })
});
