/**
 * Parses loction.search to an object
 * @param {string} query
 * @return {Object}
 */
const searchToObj = query => (query ?
  query.replace('?', '').split('&')
  .reduce((prev, curr) => {
    const exObj = prev;
    const [propName, value] = curr.split('=');
    exObj[propName] = value;
    return prev;
  }, {}) :
  null);

module.exports = searchToObj;
