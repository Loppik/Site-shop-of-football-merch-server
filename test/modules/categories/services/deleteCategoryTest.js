const assert = require('assert');
const sinon = require('sinon');
const { deleteCategory } = require('../../../../src/modules/category/controllers/category-controller');
const categoryRequest = require('../../../../src/modules/category/db/category-db');

const categoryRequestMock = sinon.mock(categoryRequest);

describe('Тестирование удаления категории', () => {
  it('успешное удаление категории, ожидается объект', async () => {
    const category = {
      name: 'catName'
    }
    
    categoryRequestMock.expects('deleteCategory').withExactArgs(category).returns(Promise.resolve(category));

    const res = await deleteCategory(category);
    assert.deepEqual(res, category);
  })
});