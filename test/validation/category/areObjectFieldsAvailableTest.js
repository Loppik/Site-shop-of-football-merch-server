const assert = require('assert');
const { areObjectFieldsUnavailable } = require('../../../src/validation/category');

describe('Тестирование наличия всех необходимых полей категории (areObjectFieldsAvailable())', () => {
  it('наличие всех необходимых полей категории, ожидается false', () => {
    let data = { name: 'Futzal' };
    let err = areObjectFieldsUnavailable(data);
    assert.equal(err, false);
  }) 

  describe('Объект категории без необходимого поля', () => {
    it('нет поля "name", ожидается "no name field"', () => {
      let data = {};
      let err = areObjectFieldsUnavailable(data);
      assert.equal(err, 'no name field');
    })
  })
})