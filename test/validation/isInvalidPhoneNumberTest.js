const assert = require('assert');
const { isInvalidPhoneNumber } = require('../../src/validation/validation');

describe('Тестирование правильности введного номера телефона (isInvalidPhoneNumber())', () => {
  it('успешная валидация номера телефона, ожидается false', () => {
    const phoneNumber = 1234567;
    let err = isInvalidPhoneNumber(phoneNumber);
    assert.equal(err, false);
  });

  describe('Некорректный формат номера телефона(наличие любых символов кроме чисел), ожидается строка "incorrect phone number format"', () => {
    it('наличие символов в номере телефона', () => {
      const phoneNumber = 'as1234a';
      let err = isInvalidPhoneNumber(phoneNumber);
      assert.equal(err, 'incorrect phone number format');
    });
  })

  describe('Некорректная длина номера телефона, ожидается строка "incorrect phone number length"', () => {
    it('пароль длинной 2 числа', () => {
      const phoneNumber = 12;
      let err = isInvalidPhoneNumber(phoneNumber);
      assert.equal(err, 'incorrect phone number length');
    });

    it('пароль длинной 16 чисел', () => {
      const phoneNumber = 1234567891234567;
      let err = isInvalidPhoneNumber(phoneNumber);
      assert.equal(err, 'incorrect phone number length');
    });
  });
});