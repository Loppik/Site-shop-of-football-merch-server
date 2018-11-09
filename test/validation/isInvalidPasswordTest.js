const assert = require('assert');
const { isInvalidPassword } = require('../../src/validation/validation');

describe('Тестирование правильности введного пароля (isInvalidPassword())', () => {
    it('нет поля пароля, ожидается строка "no password"', () => {
        let data = {login: 'Lo'};
        let err = isInvalidPassword(data);
        assert.equal(err, 'no password');
    });

    describe('Успешная валидация пароля, ожидается false', () => {
        it('пароль только из букв', () => {
            let data = {password: 'qwerty'};
            let err = isInvalidPassword(data);
            assert.equal(err, false);
        });
    
        it('пароль с нижним подчёркиванием', () => {
            let data = {password: '_pas_'};
            let err = isInvalidPassword(data);
            assert.equal(err, false);
        });

        it('пароль с числами', () => {
            let data = {password: 'p088d'};
            let err = isInvalidPassword(data);
            assert.equal(err, false);
        });
    })

    describe('Некорректные сиволы в пароле, ожидается "incorrect symbol in password"', () => {
        it('пароль со знаком процента(%)', () => {
            let data = {password: 'pas%'};
            let err = isInvalidPassword(data);
            assert.equal(err, 'incorrect symbol in password');
        });

        it('пароль со знаком собаки(@)', () => {
            let data = {password: '@pas'};
            let err = isInvalidPassword(data);
            assert.equal(err, 'incorrect symbol in password');
        });

        it('пароль с точкой', () => {
            let data = {password: 'p.as'};
            let err = isInvalidPassword(data);
            assert.equal(err, 'incorrect symbol in password');
        });
    })

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
