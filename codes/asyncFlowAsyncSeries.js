'use strict';

let async = require('async');
let asyncOperation = require('./utilities').asyncOperation;

async.series([
  function(callback) {
    asyncOperation('A', callback);
  },
  function(callback) {
    asyncOperation('B', callback);
  },
  function(callback) {
    asyncOperation('C', callback);
  },
  function(callback) {
    asyncOperation('D', callback);
  },
  function(callback) {
    asyncOperation('E', callback);
  }
], function() {
  console.log('done');
});

console.log('started');
