const assert = require('assert');
const sinon = require('sinon');
const { registration } = require('../../../../src/modules/auth/services/auth-service');
const regValidation = require('../../../../src/validation/reg');
const userRequest = require('../../../../src/modules/user/db/user-db');

const userRequestMock = sinon.mock(userRequest);
const regValidationMock = sinon.mock(regValidation);

describe('Тестирование регистрации (registration())', () => {
  describe('Некорректные данные регистрации', () => {
    it('пароль длинной 2 символа, ожидается строка "incorrect password length"', async () => {
      let data = { login: 'asdf', password: '12', phoneNumber: 1234567, name: 'Alexander', email: 's@mail.ru', address: 'Minks' };
      regValidationMock.expects('isInvalidRegData').rejects('incorrect password length');
      userRequestMock.expects('findUserByLogin').resolves();
      userRequestMock.expects('insertUser').resolves({});
      try {
        let res = await registration(data);
        assert.equal(res, 'incorrect password length');
      } catch (err) {
        assert.equal(err, 'incorrect password length');
      };
    })
  });

  it('успешная регистрация, ожидается объект user', async () => {
    let data = { login: 'test22grewger', password: '123', phoneNumber: 1234567, name: 'Alexander', email: 's@mail.ru', address: 'Minks' };
    regValidationMock.expects('isInvalidRegData').resolves(false);
      userRequestMock.expects('findUserByLogin').resolves();
      userRequestMock.expects('insertUser').resolves(data);
    try {
      let res = await registration(data);
      assert.equal(res.login, data.login);
    } catch (err) {
      assert.equal(err, data.login);
    };
  })

  it('пользователь с таким логином уже существует в системе, ожидается строка "This login already exist"', async () => {
    let data = { login: 'lll', password: '12345', phoneNumber: 1234567, name: 'Alexander', email: 's@mail.ru', address: 'Minks' };
    regValidationMock.expects('isInvalidRegData').resolves(false)
    userRequestMock.expects('findUserByLogin').rejects('This login already exist');
    userRequestMock.expects('insertUser').resolves({});
    try {
      let res = await registration(data);
      assert.equal(res, 'This login already exist');
    } catch (err) {
      assert.equal(err, 'This login already exist');
    };
  })
});