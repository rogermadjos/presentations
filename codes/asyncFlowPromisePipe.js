'use strict';

let asyncOperation = require('./utilities').asyncOperation;

asyncOperation('A')
  .then(function() {
    return Promise.all([
      asyncOperation('B').then(function() {
        return asyncOperation('C');
      }),
      asyncOperation('D')
    ]);
  })
  .then(function() {
    return asyncOperation('E');
  })
  .then(function() {
    console.log('done');
  });

console.log('started');
