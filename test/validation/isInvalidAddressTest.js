const assert = require('assert');
const { isInvalidAddress } = require('../../src/validation/validation');

describe('Тестирование правильности введного адреса (isInvalidAddress())', () => {
    it('нет поля адреса, ожидается строка "no address"', () => {
        let data = {login: 'Lo'};
        let err = isInvalidAddress(data);
        assert.equal(err, 'no address');
    });

    it('успешная валидация адреса(длина равна 6 символов), ожидается false', () => {
        let data = {address: 'Гомель'};
        let err = isInvalidAddress(data);
        assert.equal(err, false);
    });

    describe('Некорректная длина адреса, ожидается "incorrect address length"', () => {
        it('адрес длинной 2 символа', () => {
            let data = {address: 'Ми'};
            let err = isInvalidAddress(data);
            assert.equal(err, 'incorrect address length');
        });
    
        it('адрес длинной 256 символов', () => {
            let data = {address: 'qwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwer'};
            let err = isInvalidAddress(data);
            assert.equal(err, 'incorrect address length');
        });
    });
});