<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "profile",
  created() {
    console.log('profile created');
    // document.title = '用户'
  },
  destroyed() {
    console.log("profile destroyed")
  },
}
</script>

<style>

</style>