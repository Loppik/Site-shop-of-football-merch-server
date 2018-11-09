const assert = require('assert');
const { isInvalidPhoneNumber } = require('../../src/validation/validation');

describe('Тестирование правильности введного номера телефона (isInvalidPhoneNumber())', () => {
    it('нет поля номера телефона, ожидается строка "no phone number"', () => {
        let data = {login: 'Lo'};
        let err = isInvalidPhoneNumber(data);
        assert.equal(err, 'no phone number');
    });

    it('успешная валидация номера телефона, ожидается false', () => {
        let data = {phoneNumber: 1234567};
        let err = isInvalidPhoneNumber(data);
        assert.equal(err, false);
    });

    describe('Некорректный формат номера телефона(наличие любых символов кроме чисел), ожидается строка "incorrect phone number format"', () => {
        it('наличие символов в номере телефона', () => {
            let data = {phoneNumber: 'as1234a'};
            let err = isInvalidPhoneNumber(data);
            assert.equal(err, 'incorrect phone number format');
        });
    })

    describe('Некорректная длина номера телефона, ожидается строка "incorrect phone number length"', () => {
        it('пароль длинной 2 числа', () => {
            let data = {phoneNumber: 12};
            let err = isInvalidPhoneNumber(data);
            assert.equal(err, 'incorrect phone number length');
        });
    
        it('пароль длинной 16 чисел', () => {
            let data = {phoneNumber: 1234567891234567};
            let err = isInvalidPhoneNumber(data);
            assert.equal(err, 'incorrect phone number length');
        });
    });
});