const assert = require('assert');
const sinon = require('sinon');
const { getAllShoesOfOneType } = require('../../../../src/modules/shoes/services/shoes-service');
const shoesRequest = require('../../../../src/modules/shoes/db/shoes-db');
const categoryRequest = require('../../../../src/modules/category/db/category-db');

const shoesRequestMock = sinon.mock(shoesRequest);
const categoryRequestMock = sinon.mock(categoryRequest);

describe('Тестирование получения обуви одной категории', () => {
  it('успешное получение обуви одной категории, ожидается массив обуви', async () => {
    const shoesId = 'asd32ffr4';
    const shoes = [
      {
        shoesId,
        size: '43',
        count: 2
      },
      {
        shoesId,
        size: '42',
        count: 4
      }
    ]
    
    categoryRequestMock.expects('getCategoryByRouteName').resolves();
    shoesRequestMock.expects('getAllShoesOfOneType').resolves(sizes);

    const res = await getAllShoesOfOneType(shoesId);
    assert.deepEqual(res, sizes);
  })
})