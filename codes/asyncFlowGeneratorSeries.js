'use strict';

let asyncOperation = require('./utilities').asyncOperation;
let co = require('co');

co(function* () {
  yield asyncOperation('A');
  yield asyncOperation('B');
  yield asyncOperation('C');
  yield asyncOperation('D');
  yield asyncOperation('E');
}).then(function() {
  console.log('done');
});

console.log('started');
