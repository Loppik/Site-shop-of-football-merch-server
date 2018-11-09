const assert = require('assert');
const { isInvalidName } = require('../../src/validation/validation');

describe('Тестирование правильности введного имени (isInvalidName())', () => {
    it('нет поля имя, ожидается строка "no name"', () => {
        let data = {login: 'Lo'};
        let err = isInvalidName(data);
        assert.equal(err, 'no name');
    });

    it('успешная валидация имени(длина равна 9 символов), ожидается false', () => {
        let data = {name: 'Alexander'};
        let err = isInvalidName(data);
        assert.equal(err, false);
    });

    describe('Некорректные символы в имени, ожидается "incorrect symbol in name"', () => {
      it('имя с числами', () => {
        let data = {name: 'Al123'};
        let err = isInvalidName(data);
        assert.equal(err, 'incorrect symbol in name');
      });

      it('имя со знаком доллара($)', () => {
        let data = {name: '$Al$'};
        let err = isInvalidName(data);
        assert.equal(err, 'incorrect symbol in name');
      });

      it('имя с нижним подчёркиванием', () => {
        let data = {name: '_Al_'};
        let err = isInvalidName(data);
        assert.equal(err, 'incorrect symbol in name');
      });
    })

    describe('Некорректная длина имени, ожидается "incorrect name length"', () => {
        it('имя длинной 2 символа', () => {
            let data = {name: 'Al'};
            let err = isInvalidName(data);
            assert.equal(err, 'incorrect name length');
        });
    
        it('имя длинной 256 символов', () => {
            let data = {name: 'qwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwerqwertyqwertyqwer'};
            let err = isInvalidName(data);
            assert.equal(err, 'incorrect name length');
        });
    });
});