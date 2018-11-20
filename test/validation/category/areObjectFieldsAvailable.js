const assert = require('assert');
const { areObjectFieldsAvailable } = require('../../../src/validation/category');

describe.only('Тестирование наличия всех необходимых полей категории (areObjectFieldsAvailable())', () => {
  it('наличие всех необходимых полей категории, ожидается false', () => {
    let data = { name: 'Futzal' };
    let err = areObjectFieldsAvailable(data);
    assert.equal(err, false);
  }) 

  describe('Объект категории без необходимого поля', () => {
    it('нет поля "name", ожидается "no name field"', () => {
      let data = {};
      let err = areObjectFieldsAvailable(data);
      assert.equal(err, 'no name field');
    })
  })
})