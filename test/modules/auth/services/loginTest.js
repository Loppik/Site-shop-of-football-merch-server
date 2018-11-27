const assert = require('assert');
const { login } = require('../../../../src/modules/auth/services/auth-service');

describe('Тестирование авторизации (login())', () => {
  describe('Неккоректные данные авторизации', () => {
    it('логин длинной в 2 символа, ожидается строка "incorrect login length"', async () => {
      let data = { login: 'll', password: '123' };
      try {
        let res = await login(data);
        assert.equal(res, 'incorrect login length');
      } catch (err) {
        assert.equal(err, 'incorrect login length');
      };
    })
  })

  it('успешная авторизация, ожидается объект с двумя токенами внутри', async () => {
    let data = { login: 'test1', password: '123' };
    let res = await login(data);
    if (res.accessToken && res.refreshToken) {
      assert.equal(true, true);
    } else {
      assert.equal(true, false);
    }
  })

  it('в базе данных нет данного логина, ожидается строка "No such login"', async () => {
    let data = { login: 'loppikk', password: '123' };
    try {
      let res = await login(data);
      assert.equal(res, 'No such login');
    } catch (err) {
      assert.equal(err, 'No such login');
    };
  })

  it('несовпадение введённого пароля и пароля в базе данных, ожидается строка "Incorrect password"', async () => {
    let data = { login: 'lll', password: '1234' };
    try {
      let res = await login(data);
      assert.equal(res, 'Incorrect password');
    } catch (err) {
      assert.equal(err, 'Incorrect password');
    };
  })
})