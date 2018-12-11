const assert = require('assert');
const sinon = require('sinon');
const { updateUser } = require('../../../../src/modules/user/services/user-service');
const userRequest = require('../../../../src/modules/user/db/user-db');

const userRequestMock = sinon.mock(userRequest);

describe('Тестирование сервиса обновления данных пользователя', () => {
  it('успешное обновление данных пользователя, ожидается объект пользователя', async () => {
    const user = { userId: 'fr34fsd', login: 'afgs', password: '234' }
    
    userRequestMock.expects('updateUser').resolves({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 });
    userRequestMock.expects('getUserById').resolves(user);

    const res = await updateUser({ login: 'afgs', password: '234' });
    assert.deepEqual(res, user);
  })
})