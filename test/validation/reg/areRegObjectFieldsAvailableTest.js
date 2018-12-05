const assert = require('assert');
const { areRegObjectFieldsUnavailable } = require('../../../src/validation/reg');

describe('Тестирование наличия всех необходимых полей регистрации (areRegObjectFieldsUnavailable())', () => {
  it('наличие всех необходимых полей регистрации, ожидается false', async () => {
    let data = {
      login: 'Futzal',
      password: '123',
      phoneNumber: 1234567,
      name: 'qwer',
      email: 'asdf@mail.ru',
      address: 'Minsk',
    };
    let err = await areRegObjectFieldsUnavailable(data);
    assert.equal(err, false);
  }) 

  describe('Объект регистрации без необходимого поля', () => {
    it('нет поля "login", ожидается "no login field"', async () => {
      let data = {
        password: '123',
        phoneNumber: 1234567,
        name: 'qwer',
        email: 'asdf@mail.ru',
        address: 'Minsk',
      };
      let err = await areRegObjectFieldsUnavailable(data);
      assert.equal(err, 'no login field');
    })

    it('нет поля "password", ожидается "no password field"', async () => {
      let data = {
        login: 'Futzal',
        phoneNumber: 1234567,
        name: 'qwer',
        email: 'asdf@mail.ru',
        address: 'Minsk',
      };
      let err = await areRegObjectFieldsUnavailable(data);
      assert.equal(err, 'no password field');
    })

    it('нет поля "phoneNumber", ожидается "no phone number field"', async () => {
      let data = {
        login: 'Futzal',
        password: '123',
        name: 'qwer',
        email: 'asdf@mail.ru',
        address: 'Minsk',
      };
      let err = await areRegObjectFieldsUnavailable(data);
      assert.equal(err, 'no phone number field');
    })

    it('нет поля "name", ожидается "no name field"', async () => {
      let data = {
        login: 'Futzal',
        password: '123',
        phoneNumber: 1234567,
        email: 'asdf@mail.ru',
        address: 'Minsk',
      };
      let err = await areRegObjectFieldsUnavailable(data);
      assert.equal(err, 'no name field');
    })

    it('нет поля "email", ожидается "no email field"', async () => {
      let data = {
        login: 'Futzal',
        password: '123',
        phoneNumber: 1234567,
        name: 'qwer',
        address: 'Minsk',
      };
      let err = await areRegObjectFieldsUnavailable(data);
      assert.equal(err, 'no email field');
    })

    it('нет поля "address", ожидается "no address field"', async () => {
      let data = {
        login: 'Futzal',
        password: '123',
        phoneNumber: 1234567,
        name: 'qwer',
        email: 'asdf@mail.ru',
      };
      let err = await areRegObjectFieldsUnavailable(data);
      assert.equal(err, 'no address field');
    })
  })
})