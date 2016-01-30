'use strict';

module.exports = {
  asyncOperation: function(message, callback) {
    let op = new Promise(function(resolve) {
      setTimeout(function() {
        console.log(message);
        resolve();
      }, 500 + Math.random() * 500);
    });
    if(!callback) return op;
    op.then(callback);
  }
};
