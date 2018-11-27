const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../../src');
const expect = chai.expect;
chai.use(chaiHttp);

const reviewRequest = require('../../../../src/modules/review/db/review-db');
const reviewRequestMock = sinon.mock(reviewRequest); 

describe('Тестирование конечной точки получения всех отзывов на определённую обувь', () => {
  it('успешное получение отзывов, ожидается массив отзывов', () => {
    const shoesId = "5bb4a99463e3a228d0c4a42a";
    const reviews = [
    {
      shoesId,
      text: "qwerty",
      userId: "5bc46cf447e23b3248d05649",
    },
    {
      shoesId,
      text: "qdsaf",
      userId: "5bc234f447e23b3248d05649",
    }
  ];

    reviewRequestMock.expects('getReviewsByShoesId').returns(Promise.resolve(reviews));

    chai.request(server)
      .get('/review/' + shoesId)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.be.an('array');
        res.body[0].should.have.property('shoesId');
        res.body[0].should.have.property('text');
        res.body[0].should.have.property('userId');
      })
  });

  it('неуспешное получение отзывов, ожидается объект ошибки', () => {
    const shoesId = "5bb4a99463e3a228d0c4a42a";

    reviewRequestMock.expects('getReviewsByShoesId').returns(Promise.reject('db error'));

    chai.request(server)
      .get('/review/' + shoesId) 
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('err');
      })
  });
});
