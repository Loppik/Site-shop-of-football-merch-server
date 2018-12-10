const assert = require('assert');
const sinon = require('sinon');
const { reduceCountOfSizesByOne } = require('../../../../src/modules/size/services/size-service');
const sizeRequest = require('../../../../src/modules/shoes/db/shoes-db');

const sizeRequestMock = sinon.mock(sizeRequest);

describe('Тестирование уменьшения количества размера обуви', () => {
  it('успешное уменьшение количества размера обуви, ожидается массив размеров', async () => {
    const shoesId = 'asd32ffr4';
    const size = '42';  
    
    sizeRequestMock.expects('reduceCountOfSizesByOne').resolves(sizes);
    sizeRequestMock.expects('setCountOfSize').resolves(sizes);

    const res = await reduceCountOfSizesByOne({ shoesId, size });
    assert.deepEqual(res, sizes);
  })
})