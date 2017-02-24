const expect = require('chai').expect;
const searchToObj = require('../index');

const entrySimple = '?user=someUser';
const entryAdv = '?user=someUser&consent=true&zipCode=12345&city=testLand';
const entryNull = null;
const entryEmpty = '';
const entryQuestion = '?';

const toObj = () => {
  const expected = {
    user: 'someUser',
  };
  const result = searchToObj(entrySimple);
  expect(result).to.deep.equal(expected);
};

const toComplexObj = () => {
  const expected = {
    user: 'someUser',
    city: 'testLand',
    zipCode: '12345',
    consent: 'true',
  };
  const result = searchToObj(entryAdv);
  expect(result).to.deep.equal(expected);
};

const toNull = () => {
  const expected = {};
  const result = searchToObj(entryNull);
  expect(result).to.deep.equal(expected);
};

const toNullString = () => {
  const expected = {};
  const result = searchToObj(entryEmpty);
  expect(result).to.deep.equal(expected);
};

const toNullQuestion = () => {
  const expected = {};
  const result = searchToObj(entryQuestion);
  expect(result).to.deep.equal(expected);
};

const iterateSimple = () => {
  const expected = ['user'];
  const result = Object.keys(searchToObj(entrySimple));
  expect(result).to.deep.equal(expected);
};

const iterateAdv = () => {
  const expected = ['user', 'city', 'zipCode', 'consent'];
  const result = searchToObj(entryAdv);
  expect(result).to.have.all.keys(expected);
};

const iterateNull = () => {
  const result = Object.keys(searchToObj(entryNull));
  expect(result).to.be.empty;
};

const iterateEmpty = () => {
  const result = Object.keys(searchToObj(entryEmpty));
  expect(result).to.be.empty;
};

const iterateQuestion = () => {
  const result = Object.keys(searchToObj(entryQuestion));
  expect(result).to.be.empty;
};

describe('SearchParser', () => {
  it('should convert single search strings to objects', toObj);
  it('should convert multiple search strings to objects', toComplexObj);
  it('should output an empty object if there is no search string', toNull);
  it('should also return an empty object if the entry is an empty string', toNullString);
  it('should return an empty object also when wls is "?"', toNullQuestion);
  it('should behave the same for every possibility i.e. iterate over results: simple', iterateSimple);
  it('should behave the same for every possibility i.e. iterate over results: advanced', iterateAdv);
  it('should behave the same for every possibility i.e. iterate over results: null', iterateNull);
  it('should behave the same for every possibility i.e. iterate over results: empty string', iterateEmpty);
  it('should behave the same for every possibility i.e. iterate over results: question mark', iterateQuestion);
});
