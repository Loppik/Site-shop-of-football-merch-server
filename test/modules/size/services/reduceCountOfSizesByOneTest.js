const assert = require('assert');
const sinon = require('sinon');
const { reduceCountOfSizesByOne } = require('../../../../src/modules/size/services/size-service');
const sizeRequest = require('../../../../src/modules/size/db/size-db');

const sizeRequestMock = sinon.mock(sizeRequest);

describe('Тестирование сервиса уменьшения количества размера обуви', () => {
  it('успешное уменьшение количества размера обуви, ожидается массив размеров', async () => {
    const shoesId = 'asd32ffr4';
    const size = '42';  
    const count = 2;
    const updateRes = { "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 };

    sizeRequestMock.expects('getCountOfSizeByShoesId').resolves(count);
    sizeRequestMock.expects('setCountOfSize').resolves(updateRes);

    const res = await reduceCountOfSizesByOne({ shoesId, size });
    assert.deepEqual(res, updateRes);
  })
})