const assert = require('assert');
const { isInvalidEmail } = require('../../src/validation/validation');

describe('Тестирование правильности введного email (isInvalidEmail())', () => {
  it('успешная валидация email, ожидается false', () => {
    const email = 'shantyr_ay@mail.ru';
    let err = isInvalidEmail(email);
    assert.equal(err, false);
  });

  it('email без символа собаки(@), ожидается "no symbol @"', () => {
    const email = 'shantyr_ay_mail.ru';
    let err = isInvalidEmail(email);
    assert.equal(err, 'no symbol @');
  });
});