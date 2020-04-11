<template>
  <div id="app">
    <h2>{{$store.state.info}}</h2>
    <button @click="changeinfo">修改</button>
    <h2>{{message}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>
    <button @click="addStudent">添加学生</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './store/mutations-types'
export default {
  data() {
    return {
      message: '我是APP组件',
      counter: 0
    }
  },
  // computed: {
  //   more20stu() {
  //     return this.$store.state.students.filter(s => s.age >=20)
  //   }
  // },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit('INCREMENT')
    },
    subtraction() {
      this.$store.commit('decrement')
      this.$store.commit({
        type: 'decrement',
      })
    },
    addStudent() {
      const stu = {id: 114, name: 'alan', age: 35}
      this.$store.commit('addStudent', stu)
    },
    changeinfo() {
      // this.$store.commit('changeinfo')
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('222')
      //   }
      // }) // commit 提交到mutation dispath提交到action
      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('立面完成的回调')
          console.log(res)
        })

    }
  }
}
</script>

<style>

</style>