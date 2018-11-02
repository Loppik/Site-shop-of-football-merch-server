const assert = require('assert');
const {isInvalidLogin, isInvalidPassword, isInvalidPhoneNumber} = require('../../src/validation/validation');

describe('Тестирование правильности введеного логина (isInvalidLogin())', () => {
    it('нет поля логина, ожидается строка "no login"', () => {
        let data = {password: 'qwerty'};
        let err = isInvalidLogin(data);
        assert.equal(err, 'no login');
    });

    it('успешная валидация логина(длина равна 6 символам), ожидается false', () => {
        let data = {login: 'Loppik'};
        let err = isInvalidLogin(data);
        assert.equal(err, false);
    });

    describe('Некорректная длина логина, ожидается строка "incorrect login length"', () => {
        it('логин длинной 2 символа', () => {
            let data = {login: 'Lo'};
            let err = isInvalidLogin(data);
            assert.equal(err, 'incorrect login length');
        });
    
        it('логин длинной 16 символов', () => {
            let data = {login: 'loppikloppiklopp'};
            let err = isInvalidLogin(data);
            assert.equal(err, 'incorrect login length');
        });
    });
});