const assert = require('assert');
const { isInvalidRegData } = require('../../src/validation/reg');

describe('Тестирование правильности введённых данных при авторизации', () => {
  it('успешная валидация данных при авторизации, ожидается false', async () => {
    let data = {login: 'loppik', password: 'qwerty', phoneNumber: 1234567, name: 'Alex', email: 'sa@mail.ru', address: 'Minsk'};
    let err = await isInvalidRegData(data);
    assert.equal(err, false);
  })

  describe('Некорректные данные авторизации', () => {
    describe('Некорректный логин', () => {
      it('логин длинной 2 символа, ожидается "incorrect login length"', async () => {
        let data = {login: 'kl', password: 'qwert'};
        try {
          let err = await isInvalidRegData(data);
          assert.equal(err, 'incorrect login length');
        } catch(e) {
          assert.equal(e, 'incorrect login length');
        }
      });  
    })

    describe('Некорретный пароль', () => {
      it('пароль длинной 16 символов, ожидается "incorrect password length"', async () => {
        let data = {login: 'lokji', password: 'ghjktyqwertyqwer'};
        try {
          let err = await isInvalidRegData(data);
          assert.equal(err, 'incorrect password length');
        }
        catch(e) {
          assert.equal(e, 'incorrect password length');
        }
      });
    })

    describe('Некорректный номер телефона "no phone number"', () => {
      it('нет поля номера телефона, ожидается', async () => {
        let data = {login: 'loppik', password: 'qwerty'};
        try {
          let err = await isInvalidRegData(data);
          assert.equal(err, 'no phone number');
        } catch(e) {
          assert.equal(e, 'no phone number');
        }
      })
    })

    describe('Некорректное имя', () => {
      it('имя длинной 2 символа, ожидается "incorrect name length"', async () => {
        let data = {login: 'loppik', password: 'qwerty', phoneNumber: 1234567, name: 'Al'};
        try {
          let err = await isInvalidRegData(data);
          assert.equal(err, 'incorrect name length');
        } catch(e) {
          assert.equal(e, 'incorrect name length');
        }
      })
    })

    describe('Некорректный email', () => {
      it('email без символа собаки(@), ожидается "no symbol @"', async () => {
        let data = {login: 'loppik', password: 'qwerty', phoneNumber: 1234567, name: 'Alex', email: 'shantyr_ay_mail.ru'};
        try {
          let err = await isInvalidRegData(data);
          assert.equal(err, 'no symbol @');
        } catch(e) {
          assert.equal(e, 'no symbol @');
        }
      })
    })

    describe('Некорректный адрес', () => {
      it('имя длинной 2 символа, ожидается "incorrect address length"', async () => {
        let data = {login: 'loppik', password: 'qwerty', phoneNumber: 1234567, name: 'Alex', email: 'shantyr_ay@mail.ru'};
        try {
          let err = await isInvalidRegData(data);
          assert.equal(err, 'no address');          
        } catch(e) {
          assert.equal(e, 'no address');
        }
      })
    })
  })
})