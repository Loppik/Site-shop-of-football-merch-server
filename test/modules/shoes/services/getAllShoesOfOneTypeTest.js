const assert = require('assert');
const sinon = require('sinon');
const { getAllShoesOfOneType } = require('../../../../src/modules/shoes/services/shoes-service');
const shoesRequest = require('../../../../src/modules/shoes/db/shoes-db');
const categoryRequest = require('../../../../src/modules/category/db/category-db');

const shoesRequestMock = sinon.mock(shoesRequest);
const categoryRequestMock = sinon.mock(categoryRequest);

describe('Тестирование сервиса получения обуви одной категории', () => {
  it('успешное получение обуви одной категории, ожидается массив обуви', async () => {
    const routeName = 'ds';
    const category = {
      name: 'dsag',
      routeName,
    }
    const shoes = [
      {
        shoesId: 'asd32ffr4',
        size: '43',
        count: 2
      },
      {
        shoesId: 'dfg1423142ew4',
        size: '42',
        count: 4
      }
    ]
    
    categoryRequestMock.expects('getCategoryByRouteName').resolves(category);
    shoesRequestMock.expects('getAllShoesOfOneType').resolves(shoes);

    const res = await getAllShoesOfOneType(routeName);
    assert.deepEqual(res, shoes);
  })
})