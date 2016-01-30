'use strict';

let asyncOperation = require('./utilities').asyncOperation;
let co = require('co');

co(function* () {
  yield [
    asyncOperation('A'),
    asyncOperation('B'),
    asyncOperation('C'),
    asyncOperation('D'),
    asyncOperation('E')
  ];
}).then(function() {
  console.log('done');
});

console.log('started');
