const assert = require('assert');
const { isInvalidLogin } = require('../../src/validation/validation');

describe.only('Тестирование правильности введеного логина (isInvalidLogin())', () => {
  describe('Успешная валидация логина, ожидается false', () => {
    it('логин с заглавной буквы', () => {
      const login = 'Loppik';
      let err = isInvalidLogin(login);
      assert.equal(err, false);
    });

    it('логин с нижним подчёркиванием', () => {
      const login = '_lop_';
      let err = isInvalidLogin(login);
      assert.equal(err, false);
    });

    it('логин с числами', () => {
      const login = 'lo0p12';
      let err = isInvalidLogin(login);
      assert.equal(err, false);
    });
  })

  describe('Некорректные сиволы в логине, ожидается "incorrect symbol in login"', () => {
    it('логин со знаком процента(%)', () => {
      const login = 'lo%p';
      let err = isInvalidLogin(login);
      assert.equal(err, 'incorrect symbol in login');
    });

    it('логин со знаком собаки(@)', () => {
      const login = 'lop@';
      let err = isInvalidLogin(login);
      assert.equal(err, 'incorrect symbol in login');
    });

    it('логин с точкой', () => {
      const login = '.lop';
      let err = isInvalidLogin(login);
      assert.equal(err, 'incorrect symbol in login');
    });
  })

  describe('Некорректная длина логина, ожидается строка "incorrect login length"', () => {
    it('логин длинной 2 символа', () => {
      const login = 'Lo';
      let err = isInvalidLogin(login);
      assert.equal(err, 'incorrect login length');
    });

    it('логин длинной 16 символов', () => {
      const login = 'loppikloppiklopp';
      let err = isInvalidLogin(login);
      assert.equal(err, 'incorrect login length');
    });
  });
});