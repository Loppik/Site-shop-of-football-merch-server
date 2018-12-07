const assert = require('assert');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should();
const authService = require('../../../../src/modules/auth/services/auth-service');
const loginValidation  = require('../../../../src/validation/login');
const validation = require('../../../../src/validation/validation');
const jwtService = require('../../../../src/jwtService');

const loginValidationMock = sinon.mock(loginValidation);
const validationMock = sinon.mock(validation);
const jwtServiceMock = sinon.mock(jwtService);

describe('Тестирование логина', () => {
  it('успешное прохождение логина, ожидается объект с токенами', async () => {
    const login = 'o';
    const password = '123';
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzA3ODY4YzliMGU1NDMwZWNmMmFjNDQiLCJpYXQiOjE1NDM5OTcyODksImV4cCI6MTU0Mzk5NzMxOX0.Hz8afKBvcxgZFIGUSpf6hGqVTbWLwLvGPk7VFrxjFVc';
    const refreshToken = '10d8991b-f58e-4c55-b7d3-f81ccd79a43b';
    const data = {
      login,
      password
    }
    loginValidationMock.expects('areLoginObjectFieldsUnavailable').returns(false);
    validationMock.expects('isInvalidLogin').returns(false);
    validationMock.expects('isInvalidPassword').returns(false);
    jwtServiceMock.expects('generateAccessToken').returns(accessToken);
    jwtServiceMock.expects('generateRefreshToken').returns(refreshToken);
    const res = await authService.login(data);
    res.should.be.an('object');
    res.should.have.property('accessToken');
    res.should.have.property('refreshToken');
    //assert.equal(res.accessToken, accessToken);
    assert.equal(res.refreshToken, refreshToken);
  })
  /*
  it('объект категории без поля name, ожидается Error с именем "no name field"', async () => {
    const category = {}

    categoryValidationMock.expects('areObjectFieldsUnavailable').returns(false);
    categoryValidationMock.expects('isInvalidCategoryName').returns(false);

    try {
      const res = await addCategory(category);
      assert.fail();
    } catch(err) {
      assert.equal(err, 'no name field');
    }
  })

  it('категория с таким именем уже существует, ожидается объект Error', async () => {
    const name = 'catNameTest';
    const category = {
      name,
    }

    categoryValidationMock.expects('areObjectFieldsUnavailable').returns(false);
    categoryValidationMock.expects('isInvalidCategoryName').returns(false);

    try {
      const res = await addCategory(category);
      assert.fail();
    } catch(err) {
      assert.equal(err.code, 11000);
    }
  })*/
})