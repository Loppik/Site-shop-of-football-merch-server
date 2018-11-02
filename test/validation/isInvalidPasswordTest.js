const assert = require('assert');
const {isInvalidLogin, isInvalidPassword, isInvalidPhoneNumber} = require('../../src/validation/validation');

describe('Тестирование правильности введного пароля (isInvalidPassword())', () => {
    it('нет поля пароля, ожидается строка "no password"', () => {
        let data = {login: 'Lo'};
        let err = isInvalidPassword(data);
        assert.equal(err, 'no password');
    });

    it('успешная валидация пароль(длина равна 6 символов), ожидается false', () => {
        let data = {password: 'qwerty'};
        let err = isInvalidPassword(data);
        assert.equal(err, false);
    });

    describe('Некорректная длина пароля, ожидается "incorrect password length"', () => {
        it('пароль длинной 2 символа', () => {
            let data = {password: 'qw'};
            let err = isInvalidPassword(data);
            assert.equal(err, 'incorrect password length');
        });
    
        it('пароль длинной 16 символов', () => {
            let data = {password: 'qwertyqwertyqwer'};
            let err = isInvalidPassword(data);
            assert.equal(err, 'incorrect password length');
        });
    });
});
