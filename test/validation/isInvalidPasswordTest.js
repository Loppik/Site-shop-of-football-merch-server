const assert = require('assert');
const { isInvalidPassword } = require('../../src/validation/validation');

describe('Тестирование правильности введного пароля (isInvalidPassword())', () => {
  describe('Успешная валидация пароля, ожидается false', () => {
    it('пароль только из букв', () => {
      const password = 'qwerty';
      let err = isInvalidPassword(password);
      assert.equal(err, false);
    });

    it('пароль с нижним подчёркиванием', () => {
      const password = '_pas_';
      let err = isInvalidPassword(password);
      assert.equal(err, false);
    });

    it('пароль с числами', () => {
      const password = 'p088d';
      let err = isInvalidPassword(password);
      assert.equal(err, false);
    });
  })

  describe('Некорректные сиволы в пароле, ожидается "incorrect symbol in password"', () => {
    it('пароль со знаком процента(%)', () => {
      const password = 'pas%';
      let err = isInvalidPassword(password);
      assert.equal(err, 'incorrect symbol in password');
    });

    it('пароль со знаком собаки(@)', () => {
      const password = '@pas';
      let err = isInvalidPassword(password);
      assert.equal(err, 'incorrect symbol in password');
    });

    it('пароль с точкой', () => {
      const password = 'p.as';
      let err = isInvalidPassword(password);
      assert.equal(err, 'incorrect symbol in password');
    });
  })

  describe('Некорректная длина пароля, ожидается "incorrect password length"', () => {
    it('пароль длинной 2 символа', () => {
      const password = 'qw';
      let err = isInvalidPassword(password);
      assert.equal(err, 'incorrect password length');
    });

    it('пароль длинной 16 символов', () => {
      const password = 'qwertyqwertyqwer';
      let err = isInvalidPassword(password);
      assert.equal(err, 'incorrect password length');
    });
  });
});
