/*
 * @Description: 
 * @Author: znh
 * @Date: 2022-03-29 10:15:53
 */

import { defineStore } from 'pinia'
import api from '@/api/index'

export const userStore = defineStore({
  id: 'myUserStore',
  state: () => ({
    name: '立方',
    sex: 1,
    age: 21,
    total: 2020,
    clickCount: 0,
    list: []
  }),
  getters: {
    aveage(state){
      return state.total / state.age + state.clickCount
    }
  },
  actions: {
    addCount(){
      this.clickCount++
    },
    async fetchData(){
      const res = await api('/data.json')
      console.log('res', res);
      this.list = [{
        name: this.name,
        age: this.age
      },
      ...res.list]
    }
  }
})