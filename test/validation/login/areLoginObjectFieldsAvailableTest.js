const assert = require('assert');
const { areLoginObjectFieldsUnavailable } = require('../../../src/validation/login');

describe('Тестирование наличия всех необходимых полей логина (areLoginObjectFieldsUnavailable())', () => {
  it('наличие всех необходимых полей логина, ожидается false', async () => {
    let data = {
      login: 'Futzal',
      password: '123',
    };
    let err = await areLoginObjectFieldsUnavailable(data);
    assert.equal(err, false);
  }) 

  describe('Объект логина без необходимого поля', () => {
    it('нет поля "login", ожидается "no login field"', async () => {
      let data = {
        password: '123',
      };
      let err = await areLoginObjectFieldsUnavailable(data);
      assert.equal(err, 'no login field');
    })

    it('нет поля "password", ожидается "no password field"', async () => {
      let data = {
        login: 'lot',
      };
      let err = await areLoginObjectFieldsUnavailable(data);
      assert.equal(err, 'no password field');
    })
  })
})