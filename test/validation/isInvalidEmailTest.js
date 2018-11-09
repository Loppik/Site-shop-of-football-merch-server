const assert = require('assert');
const { isInvalidEmail } = require('../../src/validation/validation');

describe('Тестирование правильности введного email (isInvalidEmail())', () => {
    it('нет поля email, ожидается строка "no email"', () => {
        let data = {login: 'Lo'};
        let err = isInvalidEmail(data);
        assert.equal(err, 'no email');
    });

    it('успешная валидация email, ожидается false', () => {
        let data = {email: 'shantyr_ay@mail.ru'};
        let err = isInvalidEmail(data);
        assert.equal(err, false);
    });

    it('email без символа собаки(@), ожидается "no symbol @"', () => {
      let data = {email: 'shantyr_ay_mail.ru'};
      let err = isInvalidEmail(data);
      assert.equal(err, 'no symbol @');
  });
});