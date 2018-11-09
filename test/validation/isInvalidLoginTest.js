const assert = require('assert');
const { isInvalidLogin } = require('../../src/validation/validation');

describe('Тестирование правильности введеного логина (isInvalidLogin())', () => {
    it('нет поля логина, ожидается строка "no login"', () => {
        let data = {password: 'qwerty'};
        let err = isInvalidLogin(data);
        assert.equal(err, 'no login');
    });

    describe('Успешная валидация логина, ожидается false', () => {
        it('логин с заглавной буквы', () => {
            let data = {login: 'Loppik'};
            let err = isInvalidLogin(data);
            assert.equal(err, false);
        });
    
        it('логин с нижним подчёркиванием', () => {
            let data = {login: '_lop_'};
            let err = isInvalidLogin(data);
            assert.equal(err, false);
        });

        it('логин с числами', () => {
            let data = {login: 'lo0p12'};
            let err = isInvalidLogin(data);
            assert.equal(err, false);
        });
    })

    describe('Некорректные сиволы в логине, ожидается "incorrect symbol in login"', () => {
        it('логин со знаком процента(%)', () => {
            let data = {login: 'lo%p'};
            let err = isInvalidLogin(data);
            assert.equal(err, 'incorrect symbol in login');
        });

        it('логин со знаком собаки(@)', () => {
            let data = {login: 'lop@'};
            let err = isInvalidLogin(data);
            assert.equal(err, 'incorrect symbol in login');
        });

        it('логин с точкой', () => {
            let data = {login: '.lop'};
            let err = isInvalidLogin(data);
            assert.equal(err, 'incorrect symbol in login');
        });
    })

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