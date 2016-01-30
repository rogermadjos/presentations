'use strict';

let async = require('async');
let asyncOperation = require('./utilities').asyncOperation;

async.auto({
  A: function(callback) {
    asyncOperation('A', callback);
  },
  B: ['A', function(callback) {
    asyncOperation('B', callback);
  }],
  C: ['B', function(callback) {
    asyncOperation('C', callback);
  }],
  D: ['A', function(callback) {
    asyncOperation('D', callback);
  }],
  E: ['C', 'D', function(callback) {
    asyncOperation('E', callback);
  }],
}, function() {
  console.log('done');
});

console.log('started');
