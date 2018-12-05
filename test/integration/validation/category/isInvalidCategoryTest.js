const assert = require('assert');
const validation = require('../../../../src/validation/category');

describe('Тестирование валидации категории', () => {
  it('успешная валидация категории, ожидается false', async () => {
    const name = 'catName';
    const category = {
      name,
    }
    
    const err = await validation.isInvalidCategory(category);
    assert.equal(err, false);
  })
  
  describe('Объект категории без необходимого поля', () => {
    it('нет поля "name", ожидается Error с именем "no name field"', async () => {
      const category = {};
      try {
        const err = await validation.isInvalidCategory(category);
        assert.fail();
      } catch(err) {
        assert.equal(err, 'no name field');
      }
    })
  })

  describe('Некорректные символы в имени, ожидается "incorrect symbol in name"', () => {
    it('имя с числами', async () => {
      const category = { name: 'cat123' };
      try {
        const err = await validation.isInvalidCategory(category);
        assert.fail();
      } catch(err) {
        assert.equal(err, 'incorrect symbol in name');
      }
    });

    it('имя с нижним подчёркиванием', async () => {
      const category = { name: '_fut_' };
      try {
        const err = await validation.isInvalidCategory(category);
        assert.fail();
      } catch(err) {
        assert.equal(err, 'incorrect symbol in name');
      }
    });
  })

  describe('Некорректная длина имени, ожидается "incorrect name length"', () => {
    it('имя длинной 2 символа', async () => {
      const category = { name: 'bt' };
      try {
        const err = await validation.isInvalidCategory(category);
        assert.fail();
      } catch(err) {
        assert.equal(err, 'incorrect name length');
      }
    });

    it('имя длинной 26 символов', async () => {
      const category = { name: 'qwertqwertqwertqwertqwertr' };
      try {
        const err = await validation.isInvalidCategory(category);
        assert.fail();
      } catch(err) {
        assert.equal(err, 'incorrect name length');
      }
    });
  });
})