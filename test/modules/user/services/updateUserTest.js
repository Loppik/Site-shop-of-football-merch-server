const assert = require('assert');
const sinon = require('sinon');
const { updateUser } = require('../../../../src/modules/user/services/user-service');
const userRequest = require('../../../../src/modules/user/db/user-db');

const userRequestMock = sinon.mock(userRequest);

describe('Тестирование обновления данных пользователя', () => {
  it('успешное обновление данных пользователя, ожидается ************************', async () => {
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
    
    userRequestMock.expects('updateUser').resolves(sizes);
    userRequestMock.expects('getUserById').resolves(sizes);

    const res = await updateUser(shoesId);
    assert.deepEqual(res, sizes);
  })
})