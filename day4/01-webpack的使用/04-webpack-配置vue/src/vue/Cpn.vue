<template>
  <div>
    <h2>我是标题</h2>
    <h2>我是内容</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return {
      name: 'Cpn组件的name'
    }
  }
}
</script>

<style>

</style>