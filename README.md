# search-to-obj
___
search-to-obj is a small module to quickly parse location.search, or the query string in an url to an object.
___

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
  