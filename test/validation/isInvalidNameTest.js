const assert = require('assert');
const { isInvalidName } = require('../../src/validation/validation');

describe('Тестирование правильности введного имени (isInvalidName())', () => {
  it('успешная валидация имени(длина равна 9 символов), ожидается false', () => {
    const name = 'Alexander';
    let err = isInvalidName(name);
    assert.equal(err, false);
  });

  describe('Некорректные символы в имени, ожидается "incorrect symbol in name"', () => {
    it('имя с числами', () => {
      const name = 'Al123';
      let err = isInvalidName(name);
      assert.equal(err, 'incorrect symbol in name');
    });

    it('имя со знаком доллара($)', () => {
      const name = '$Al$';
      let err = isInvalidName(name);
      assert.equal(err, 'incorrect symbol in name');
    });

    it('имя с нижним подчёркиванием', () => {
      const name = '_Al_';
      let err = isInvalidName(name);
      assert.equal(err, 'incorrect symbol in name');
    });
  })

  describe('Некорректная длина имени, ожидается "incorrect name length"', () => {
    it('имя длинной 2 символа', () => {
      const name = 'Al';
      let err = isInvalidName(name);
      assert.equal(err, 'incorrect name length');
    });

    it('имя длинной 256 символов', () => {
      const name = 'qwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwer';
      let err = isInvalidName(name);
      assert.equal(err, 'incorrect name length');
    });
  });
});