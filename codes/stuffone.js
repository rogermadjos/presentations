'use strict';

setInterval((function(){
  let index = 0;
  return function() {
    console.log(index++);
  };
})(), 1000);
