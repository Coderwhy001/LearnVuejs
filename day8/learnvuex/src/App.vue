<template>
  <div id="app">
    <h2>{{message}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
    <h2>{{$store.state.counter}}</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  data() {
    return {
      message: '我是APP组件',
      counter: 0
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>

</style>