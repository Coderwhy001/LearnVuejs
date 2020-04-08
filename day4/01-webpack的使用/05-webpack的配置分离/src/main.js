// const {add, mul} = require('./mathUtils.js')
// console.log(add(20, 30))

// import {name} from './info'
// console.log(name)

require('./css/normal.css')

require('./css/special.less')
document.writeln('<h2>你好啊</h2>')


import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

document.writeln('<button>按钮</button>')