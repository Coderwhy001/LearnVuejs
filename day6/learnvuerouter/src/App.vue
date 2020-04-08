<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->


    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link :to="{path: '/profile', query: {name: 'why'}}">档案</router-link>
    <keep-alive exclude="profile">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: 'lisi'
    }
  },

}
</script>
<style>
.router-link-active{
  color: red
}
</style>
