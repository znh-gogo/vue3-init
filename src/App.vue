<!--
 * @Description: 
 * @Author: znh
 * @Date: 2022-03-28 16:37:23
-->
<template>
  <ul>
    <router-link to="/index"><li>index</li></router-link>
    <router-link to="/about"><li>about</li></router-link>
  </ul>
  <router-view></router-view>
  <div class="footer">eventBus call -- {{call}}</div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      call: 0
    }
  },
  mounted() {
    this.$bus.on('app', call => {
      this.call = call
    })
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  text-align: center;
}
</style>
