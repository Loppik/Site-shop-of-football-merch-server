const assert = require('assert');
const { isInvalidLoginData } = require('../../src/validation/login');

describe('Тестирование правильности введённых данных при авторизации', () => {
  it('успешная валидация данных при авторизации, ожидается false', async () => {
    let data = {login: 'loppik', password: 'qwerty'};
    let err = await isInvalidLoginData(data);
    assert.equal(err, false);
  })

  describe('Некорректные данные авторизации', () => {
    describe('Некорректный логин', () => {
      it('логин длинной 2 символа, ожидается "incorrect login length"', () => {
        let data = {login: 'kl', password: 'qwert'};
        isInvalidLoginData(data).then(() => {}, (err) => {
          assert.equal(err, 'incorrect login length');
        });
      });  
    })

    describe('Некорретный пароль', () => {
      it('пароль длинной 16 символов, ожидается "incorrect password length"', async () => {
        let data = {login: 'lokji', password: 'ghjktyqwertyqwer'};
        try {
          let err = await isInvalidLoginData(data);
          assert.equal(err, 'incorrect password length');
        }
        catch(e) {
          assert.equal(e, 'incorrect password length');
        }
      });
    })
  })
})