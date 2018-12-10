const assert = require('assert');
const sinon = require('sinon');
const { getSizesByShoesId } = require('../../../../src/modules/size/services/size-service');
const sizeRequest = require('../../../../src/modules/shoes/db/shoes-db');

const sizeRequestMock = sinon.mock(sizeRequest);

describe('Тестирование получения размеров обуви', () => {
  it('успешное получение размеров обуви, ожидается массив размеров', async () => {
    const shoesId = 'asd32ffr4';
    const sizes = [
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
    
    sizeRequestMock.expects('getSizesByShoesId').resolves(sizes);

    const res = await getSizesByShoesId(shoesId);
    assert.deepEqual(res, sizes);
  })
})