const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const reviewService = require('../../../../src/modules/review/services/review-service');

const reviewServiceMock = sinon.mock(reviewService);

describe('Тестирование добавления отзыва', () => {
  describe('', () => {
    it('успешное добавление отзыва, ожидается объект отзыва', () => {
      const review = {
        shoesId: 'fgr3253d0',
        login: 'asdf',
        text: 'asdfvd',
      }
    
      reviewServiceMock.expects('addReview').resolves(review);
      chai.request(server)
        .post('/review/add')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('review');
          res.body.review.should.be.an('object');
          res.body.review.should.have.property('shoesId');
          res.body.review.should.have.property('login');
          res.body.review.should.have.property('text');
          expect(res.body.review.shoesId).to.be.equal(review.shoesId);
          expect(res.body.review.login).to.be.equal(review.login);
          expect(res.body.review.text).to.be.equal(review.text);
        })
    })
  })

  describe('', () => {
    it('неуспешное добавление отзыва, ожидается объект ошибки', () => {
      reviewServiceMock.expects('addReview').rejects('db error');
      chai.request(server)
        .post('/review/add')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
          expect(true).to.be.true;
        })
      reviewServiceMock.restore();
    })
  })
  
});

