import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'
Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context)
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '1111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}
export default new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'curry', age: 10},
      {id: 112, name: 'kobe', age: 24},
      {id: 113, name: 'james', age: 30},
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 198
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    changeinfo(state) {
      state.info.name = 'xiao'
      // state.info['address'] = '洛杉矶'
      // Vue.set(state.info, 'address', '洛杉矶')
      Vue.delete(state.info,'age')
    }
  },
  actions: { // 异步操作
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('changeinfo')
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // }
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('changeinfo')
          console.log(payload)
          resolve(1111)
        }, 1000)
      })
    }
  },
  getters:{
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})
