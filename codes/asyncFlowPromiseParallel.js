'use strict';

let asyncOperation = require('./utilities').asyncOperation;

Promise.all([
  asyncOperation('A'),
  asyncOperation('B'),
  asyncOperation('C'),
  asyncOperation('D'),
  asyncOperation('E')
]).then(function() {
  console.log('done');
});

console.log('started');
