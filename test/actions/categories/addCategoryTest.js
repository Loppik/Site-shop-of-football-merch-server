const assert = require('assert');
const sinon = require('sinon');
const { addCategory } = require('../../../src/actions/categories');
const categoryValidation = require('../../../src/validation/category');
const categoryRequest = require('../../../src/db/categories');

const categoryRequestMock = sinon.mock(categoryRequest);
const categoryValidationMock = sinon.mock(categoryValidation);

describe('Тестирование добавления новой категории', () => {
  it('успешное добавление новой категории, ожидается объект', async () => {
    const category = {
      name: 'catName'
    }
    
    categoryRequestMock.expects('addCategory').withExactArgs(category).returns(Promise.resolve({
      name: 'catName', 
      routeName: 'catName',
    }));

    categoryValidationMock.expects('isInvalidCategory').returns(Promise.resolve(false));

    const res = await addCategory(category);
    assert.deepEqual(res, {name: 'catName', routeName: 'catName'})
  })

  it('некорректная длина имени новой категории, ожидается Error с именем "incorrect name length"', async () => {
    const category = {
      name: 'catName'
    }

    categoryValidationMock.expects('isInvalidCategory').returns(Promise.reject('incorrect name length'));

    categoryRequestMock.expects('addCategory').withExactArgs(category).returns(Promise.resolve({
      name: 'catName',
      routeName: 'catName',
    }));

    try {
      const res = await addCategory(category);
      assert.fail();
    } catch(err) {
      assert.equal(err, 'incorrect name length');
    }
  })
})