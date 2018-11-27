const assert = require('assert');
const { registration } = require('../../../../src/modules/auth/services/auth-service');
const userRequest = require('../../../../src/modules/user/db/user-db');

describe('Тестирование регистрации (registration())', () => {
  describe('Некорректные данные регистрации', () => {
    it('пароль длинной 2 символа, ожидается строка "incorrect password length"', async () => {
      let data = { login: 'loppik', password: '12', phoneNumber: 1234567, name: 'Alexander', email: 's@mail.ru', address: 'Minks' };
      try {
        let res = await registration(data);
        assert.equal(res, 'incorrect password length');
      } catch (err) {
        assert.equal(err, 'incorrect password length');
      };
    })
  });

  it('успешная регистрация, ожидается объект user', async () => {
    let data = { login: 'test2', password: '123', phoneNumber: 1234567, name: 'Alexander', email: 's@mail.ru', address: 'Minks' };
    try {
      let res = await registration(data);
      assert.equal(res.login, data.login);
      await userRequest.deleteUserByLogin(data.login);
    } catch (err) {
      assert.equal(err, data.login);
    };
  })

  it('пользователь с таким логином уже существует в системе, ожидается строка "This login already exist"', async () => {
    let data = { login: 'lll', password: '12345', phoneNumber: 1234567, name: 'Alexander', email: 's@mail.ru', address: 'Minks' };
    try {
      let res = await registration(data);
      assert.equal(res, 'This login already exist');
    } catch (err) {
      assert.equal(err, 'This login already exist');
    };
  })
});