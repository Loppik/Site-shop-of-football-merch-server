const assert = require('assert');
const sinon = require('sinon');
const { addOrder } = require('../../../../src/modules/order/service/order-service');
const sizeService = require('../../../../src/modules/size/services/size-service');
const orderRequest = require('../../../../src/modules/order/db/order-db');

const sizeServiceMock = sinon.mock(sizeService);
const orderRequestMock = sinon.mock(orderRequest);

describe('Тестирование сервиса добавления заказа', () => {
  it('успешное добавление заказа, ожидается объект ', async () => {
    const order = {
      userId: 'asd32ffr4',
      info: 'asdfvd',
      shoes: [
        {
          shoesId: 'adsferrw234',
        }
      ],
    }
    
    sizeServiceMock.expects('reduceCountOfSizesByOne').resolves(2);

    orderRequestMock.expects('addOrder').resolves(order);

    const res = await addOrder(order);
    assert.deepEqual(res, order);
  })
})