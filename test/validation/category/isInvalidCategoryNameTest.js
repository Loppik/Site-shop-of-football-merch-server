const assert = require('assert');
const { isInvalidCategoryName } = require('../../../src/validation/category');

describe('Тестирование правильности введного имени категории (isInvalidCategoryName())', () => {
  it('успешная валидация имени(длина равна 6 символов), ожидается false', () => {
    let name = 'Futzal';
    let err = isInvalidCategoryName(name);
    assert.equal(err, false);
  }) 
  
  describe('Некорректные символы в имени, ожидается "incorrect symbol in name"', () => {
    it('имя с числами', () => {
      name = 'Futzal07';
      let err = isInvalidCategoryName(name);
      assert.equal(err, 'incorrect symbol in name');
    });

    it('имя с нижним подчёркиванием', () => {
      let name = '_fut_'
      let err = isInvalidCategoryName(name);
      assert.equal(err, 'incorrect symbol in name');
    });
  })

  describe('Некорректная длина имени, ожидается "incorrect name length"', () => {
    it('имя длинной 2 символа', () => {
        let name = 'bt'
        let err = isInvalidCategoryName(name);
        assert.equal(err, 'incorrect name length');
    });

    it('имя длинной 26 символов', () => {
        let name = 'qwertqwertqwertqwertqwertr'
        let err = isInvalidCategoryName(name);
        assert.equal(err, 'incorrect name length');
    });
  });
})