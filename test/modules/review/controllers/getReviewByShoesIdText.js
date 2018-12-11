const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../../../../src/index');

const reviewRequest = require('../../../../src/modules/review/db/review-db');

const reviewRequestMock = sinon.mock(reviewRequest);
const shoesId = 'r324ewf';
describe('Тестирование контроллера получения отзывов', () => {
  describe('', () => {
    it('успешное получение отзывов, ожидается массив отзывов', () => {
      const reviews = [
        {
          shoesId,
          login: 'asdf',
          text: 'asdfvd',
        }
      ]
  
      reviewRequestMock.expects('getReviewsByShoesId').resolves(reviews);
      chai.request(server)
        .get('/review/' + shoesId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.forEach((r) => {
            r.should.have.property('shoesId');
            r.should.have.property('login');
            r.should.have.property('text');
          });
        })
    })
  })


  describe('', () => {
    it('неуспешное получение отзывов, ожидается объект ошибки', () => {
      reviewRequestMock.expects('getReviewsByShoesId').rejects('db error');
      chai.request(server)
        .get('/review/' + shoesId)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('err');
        })
    })
  })
});

