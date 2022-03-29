/*
 * @Description: 
 * @Author: znh
 * @Date: 2022-03-28 16:55:21
 */
import Index from '@/views/Index/index.vue'
import About from '@/views/About/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/Index/index.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About/index.vue')
  }
]

export default routes