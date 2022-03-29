<!--
 * @Description: 
 * @Author: znh
 * @Date: 2022-03-28 16:53:20
-->
<template>
  <div>
    index
    <h3>state --- {{store.clickCount}}</h3>
    <h3>getters -- {{store.aveage}}</h3>
    <button @click="handle">add-Count</button>

    <button @click="getData">getData</button>
    <div v-for="(item,index) in store.list" :key="index">{{item.name}} -- {{item.age}}</div>
    <br>
    <input type="text" v-model.number="num">
    <div>{{transValue}}</div>
  </div>
</template>
<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { userStore } from '@/store/userStore'
import { transPriceFunc } from '@/utils/util'
export default defineComponent({
  setup() {
    const store = userStore()
    const num = ref(null)
    const transValue = computed(() => transPriceFunc(num.value))
    store.$patch({
      name: '达康',
      age: 25,
    })
    const handle = () => {
      // store.clickCount++
      store.addCount()
    }
    const getData = () => {
      store.fetchData()
    }
    console.log('store',store);
    return {
      store,
      num,
      handle,
      getData,
      transValue
    }
  }
})
</script>
<style scoped>

</style>