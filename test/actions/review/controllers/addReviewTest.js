const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../../src/index');
const expect = chai.expect;
chai.use(chaiHttp);

const reviewService = require('../../../../src/modules/review/services/review-service');
const reviewServiceMock = sinon.mock(reviewService); 

describe('Тестирование конечной точки добавления отзыва', () => {
  it('успешное добавление отзыва, ожидается объект отзыва', () => {
    const review = {
      shoesId: "5bb4a99463e3a228d0c4a42a",
      text: "qwerty",
      userId: "5bc46cf447e23b3248d05649",
    };

    reviewServiceMock.expects('addReview').returns(Promise.resolve(review));

    chai.request(server)
      .post('/review/add')
      .send(review)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.review).to.be.an('object');
        res.body.review.should.have.property('shoesId');
        res.body.review.should.have.property('text');
        res.body.review.should.have.property('userId');
      })
  });

  it('неуспешное добавление отзыва, ожидается объект ошибки', () => {
    const review = {
      shoesId: "5bb4a99463e3a228d0c4a42a",
      text: "qwerty",
      userId: "5bc46cf447e23b3248d05649",
    };

    reviewServiceMock.expects('addReview').returns(Promise.reject('db error'));

    chai.request(server)
      .post('/review/add')
      .send(review)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('err');
      })
  });
});
