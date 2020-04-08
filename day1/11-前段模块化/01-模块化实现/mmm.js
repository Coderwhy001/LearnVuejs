(function () {
  if(moduleA.flag) {
    console.log('xiaoming')
  }  

  console.log(moduleA.sum(40, 50))
})()

var {flag, sum} = require('./aaa.js')