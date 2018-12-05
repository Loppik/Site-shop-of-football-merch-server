const assert = require('assert');
const sinon = require('sinon');
const { addCategory } = require('../../../../src/modules/category/services/category-service');
const categoryValidation = require('../../../../src/validation/category');
const categoryRequest = require('../../../../src/modules/category/db/category-db');

const categoryValidationMock = sinon.mock(categoryValidation);

describe('Тестирование добавления новой категории', () => {
  it('успешное добавление новой категории, ожидается объект', async () => {
    const name = 'catName';
    const routeName = 'catName';
    const category = {
      name,
    }
    
    categoryValidationMock.expects('areObjectFieldsUnavailable').returns(false);
    categoryValidationMock.expects('isInvalidCategoryName').returns(false);
    const res = await addCategory(category);
    assert.equal(res.name, name);
    assert.equal(res.routeName, routeName);
    
    const ct = await categoryRequest.getCategoryByRouteName(routeName);
    await categoryRequest.deleteCategory(ct._id);
  })
  
  it('объект категории без поля name, ожидается Error с именем "no name field"', async () => {
    const category = {}

    categoryValidationMock.expects('areObjectFieldsUnavailable').returns(false);
    categoryValidationMock.expects('isInvalidCategoryName').returns(false);

    try {
      const res = await addCategory(category);
      assert.fail();
    } catch(err) {
      assert.equal(err, 'no name field');
    }
  })

  it('категория с таким именем уже существует, ожидается объект Error', async () => {
    const name = 'catNameTest';
    const category = {
      name,
    }

    categoryValidationMock.expects('areObjectFieldsUnavailable').returns(false);
    categoryValidationMock.expects('isInvalidCategoryName').returns(false);

    try {
      const res = await addCategory(category);
      assert.fail();
    } catch(err) {
      assert.equal(err.code, 11000);
    }
  })
})

describe('Тестирование добавления новой категории', () => {
  it('успешное добавление новой категории, ожидается объект', async () => {
    const name = 'catName';
    const routeName = 'catName';
    const category = {
      name,
    }
    
    const res = await addCategory(category);
    assert.equal(res.name, name);
    assert.equal(res.routeName, routeName);
    
    const ct = await categoryRequest.getCategoryByRouteName(routeName);
    await categoryRequest.deleteCategory(ct._id);
  })
  
  it('объект категории без поля name, ожидается Error с именем "no name field"', async () => {
    const category = {}

    try {
      const res = await addCategory(category);
      assert.fail();
    } catch(err) {
      assert.equal(err, 'no name field');
    }
  })

  it('категория с таким именем уже существует, ожидается объект Error', async () => {
    const name = 'catNameTest';
    const category = {
      name,
    }

    try {
      const res = await addCategory(category);
      assert.fail();
    } catch(err) {
      assert.equal(err.code, 11000);
    }
  })
})
