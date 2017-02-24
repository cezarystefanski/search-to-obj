# search-to-obj

search-to-obj is a small module to quickly parse location.search, or the query string in an url to an object.
[![Build Status](https://travis-ci.org/cezarystefanski/search-to-obj.svg?branch=master)](https://travis-ci.org/cezarystefanski/search-to-obj) [![Coverage Status](https://coveralls.io/repos/github/cezarystefanski/search-to-obj/badge.svg?branch=master)](https://coveralls.io/github/cezarystefanski/search-to-obj?branch=master)

## Installation
  

   `npm install search-to-obj`

## Usage

    import searchToObj from 'search-to-obj';

or in node land 

    var searchToObj = require('search-to-obj');

and then just 

    const dls = document.location.search;
    const searchParams = mapQuery(dls);
    console.dir(searchParams);

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
  