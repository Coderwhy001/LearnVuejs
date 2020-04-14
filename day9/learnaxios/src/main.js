import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   // console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/api/h8/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   // console.log(res)
// })

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/api/h8/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000/api/h8',
//   timeout: 5000
// })

// instance1({
//   url: '/home/mutidata'
// }).then(res => {
//   console.log(res)
// })
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
import { request } from "./components/network/request"
// request({
//   url: '/home/mutidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})