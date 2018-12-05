const assert = require('assert');
const { isInvalidAddress } = require('../../src/validation/validation');

describe('Тестирование правильности введного адреса (isInvalidAddress())', () => {
  it('успешная валидация адреса(длина равна 6 символов), ожидается false', () => {
    const address = 'Гомель';
    let err = isInvalidAddress(address);
    assert.equal(err, false);
  });

  describe('Некорректная длина адреса, ожидается "incorrect address length"', () => {
    it('адрес длинной 2 символа', () => {
      const address = 'Ми';
      let err = isInvalidAddress(address);
      assert.equal(err, 'incorrect address length');
    });

    it('адрес длинной 256 символов', () => {
      const address = 'qwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwer';
      let err = isInvalidAddress(address);
      assert.equal(err, 'incorrect address length');
    });
  });
});