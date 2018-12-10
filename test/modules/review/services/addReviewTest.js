const assert = require('assert');
const sinon = require('sinon');
const reviewService = require('../../../../src/modules/review/services/review-service');

const userRequest = require('../../../../src/modules/user/db/user-db');
const guestRequest = require('../../../../src/modules/user/db/guest-db');
const reviewRequest = require('../../../../src/modules/review/db/review-db');

const userRequestMock = sinon.mock(userRequest);
const guestRequestMock = sinon.mock(guestRequest);
const reviewRequestMock = sinon.mock(reviewRequest);

describe('Тестирование добавления отзыва', () => {
  describe('Тестирование добавления отзыва от гостя', () => {
    it('Успешное добавление отзыва от гостя', async () => {
      const reviewInput = {}
      const guest = {
        login: 'Guest',
        number: 1,
      }
      const reviewOutput = {
        ...reviewInput,
        login: guest.login + guest.number,
      }
      guestRequestMock.expects('getGuest').returns(Promise.resolve(guest));
      guestRequestMock.expects('updateGuestNumber').returns(Promise.resolve({}));
      reviewRequestMock.expects('addReview').returns(Promise.resolve(reviewOutput));
      const res = await reviewService.addReview(reviewInput);
      assert.deepEqual(res, reviewOutput);
    })
  })
  describe('Тестирование добавления отзыва от пользователя', () => {
    it('Успешное добавление отзыва от пользователя', async () => {
      const reviewInput = {
        userId: 'se23afg',
        
      }
      const user = {
        login: 'nick',
      }
      const reviewOutput = {
        ...reviewInput,
        login: user.login,
      }
      
      userRequestMock.expects('getUserById').returns(Promise.resolve(user));
      reviewRequestMock.expects('addReview').returns(Promise.resolve(reviewOutput));
      const res = await reviewService.addReview(reviewInput);
      assert.deepEqual(res, reviewOutput);
      userRequestMock.restore();
    })
  })
})

