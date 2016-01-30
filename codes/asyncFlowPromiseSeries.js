'use strict';

let asyncOperation = require('./utilities').asyncOperation;

asyncOperation('A')
  .then(function() {
    return asyncOperation('B');
  })
  .then(function() {
    return asyncOperation('C');
  })
  .then(function() {
    return asyncOperation('D');
  })
  .then(function() {
    return asyncOperation('E');
  })
  .then(function() {
    console.log('done');
  });

console.log('started');
