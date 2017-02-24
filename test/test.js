const expect = require('chai').expect;
const searchToObj = require('../index');

const toObj = () => {
  const expected = {
    user: 'someUser',
  };
  const entry = '?user=someUser';
  const result = searchToObj(entry);
  expect(result).to.deep.equal(expected);
};

const toComplexObj = () => {
  const expected = {
    user: 'someUser',
    city: 'testLand',
    zipCode: '12345',
    consent: 'true',
  };
  const entry = '?user=someUser&consent=true&zipCode=12345&city=testLand';
  const result = searchToObj(entry);
  expect(result).to.deep.equal(expected);
};

const toNull = () => {
  const expected = null;
  const result = searchToObj();
  expect(result).to.equal(expected);
};

const toNullString = () => {
  const expected = null;
  const result = searchToObj('');
  expect(result).to.equal(expected);
};

describe('SearchParser', () => {
  it('should convert single search strings to objects', toObj);
  it('should convert multiple search strings to objects', toComplexObj);
  it('should output null if there is no search string', toNull);
  it('should also return null if the entry is an empty string', toNullString);
});
