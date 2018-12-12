const assert = require('assert');
const sinon = require('sinon');
const { login } = require('../../../../src/modules/auth/services/auth-service');
const loginValidation = require('../../../../src/validation/login');
const userRequest = require('../../../../src/modules/user/db/user-db');
const tokenRequest = require('../../../../src/modules/auth/db/token-db');
const bcrypt = require('bcrypt');
const jwtService = require('../../../../src/jwtService');

const userRequestMock = sinon.mock(userRequest);
const tokenRequestMock = sinon.mock(tokenRequest);
const bcryptMock = sinon.mock(bcrypt);
const jwtServiceMock = sinon.mock(jwtService);
const loginValidationMock = sinon.mock(loginValidation);

describe('Тестирование авторизации (login())', () => {
  describe('Неккоректные данные авторизации', async () => {
    it('логин длинной в 2 символа, ожидается строка "incorrect login length"', async () => {
      let data = { login: 'll', password: '123' };
      loginValidationMock.expects('isInvalidLoginData').rejects('incorrect login length');
      userRequestMock.expects('findUserByLogin').resolves({});
      bcryptMock.expects('compare').resolves(true);
      jwtServiceMock.expects('generateAcsRefTokens').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
      tokenRequestMock.expects('updateRefreshToken').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
      try {
        let res = await login(data);
        assert.equal(res, 'incorrect login length');
      } catch (err) {
        assert.equal(err, 'incorrect login length');
      };
    })
  })

  it('успешная авторизация, ожидается объект с двумя токенами внутри', async () => {
    let data = { login: 'ooo', password: '123' };
    loginValidationMock.expects('isInvalidLoginData').resolves(false);
    userRequestMock.expects('findUserByLogin').resolves({});
    bcryptMock.expects('compare').resolves(true);
    jwtServiceMock.expects('generateAcsRefTokens').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
    tokenRequestMock.expects('updateRefreshToken').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
    let res = await login(data);
    if (res.accessToken && res.refreshToken) {
      assert.equal(true, true);
    } else {
      assert.equal(true, false);
    }
  })

  it('в базе данных нет данного логина, ожидается строка "No such login"', async () => {
    let data = { login: 'loppikk', password: '123' };
    loginValidationMock.expects('isInvalidLoginData').resolves(false);
    userRequestMock.expects('findUserByLogin').rejects('No such login');
    bcryptMock.expects('compare').resolves(true);
    jwtServiceMock.expects('generateAcsRefTokens').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
    tokenRequestMock.expects('updateRefreshToken').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
    try {
      let res = await login(data);
      assert.equal(res, 'No such login');
    } catch (err) {
      assert.equal(err, 'No such login');
    };
  })

  it('несовпадение введённого пароля и пароля в базе данных, ожидается строка "Incorrect password"', async () => {
    let data = { login: 'lll', password: '1234' };
    loginValidationMock.expects('isInvalidLoginData').resolves(false);
    userRequestMock.expects('findUserByLogin').rejects('Incorrect password');
    bcryptMock.expects('compare').rejects('Incorrect password')
    jwtServiceMock.expects('generateAcsRefTokens').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
    tokenRequestMock.expects('updateRefreshToken').resolves({accessToken: 'fsadf23', refreshToken: 'fre5345234'});
    try {
      let res = await login(data);
      assert.equal(res, 'Incorrect password');
    } catch (err) {
      assert.equal(err, 'Incorrect password');
      userRequestMock.restore();
    };
  })
})
