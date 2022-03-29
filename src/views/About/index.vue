<!--
 * @Description: 
 * @Author: znh
 * @Date: 2022-03-28 16:54:57
-->
<template>
  <div>
    <div>
      <h3>state --- {{store.clickCount}}</h3>
      <h3>getters -- {{store.aveage}}</h3>
    </div>
    <button @click="handleBus">call EventBus</button>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { userStore } from '@/store/userStore'
export default defineComponent({
  components: { HelloWorld },
  setup() {
    const store = userStore()
    const currentInstance = getCurrentInstance()
    const handleBus = () => {
      // console.log('currentInstance',currentInstance);
      //currentInstance.proxy 是暴露给用户得api，里面代理了全局变量
      currentInstance.proxy.$bus.emit('app',store.clickCount++)
    }
    return {
      store,
      handleBus
    }
  }
})
</script>
<style scoped>

</style>