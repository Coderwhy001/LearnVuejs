<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn'
export default {
  name: "App",
  data() {
    return {
      message: 'Hello Webpack'
    }
  },
  components: {
    Cpn
  }
}
</script>

<style scoped>
.title {
  color: green
}
</style>