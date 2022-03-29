/*
 * @Description: 路由配置
 * @Author: znh
 * @Date: 2022-03-28 16:48:44
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



/**
 * 头2.8上0.3手2.45下1.8鞋子0.7武器10面具1.05翅膀7.8符咒9.07首饰0.95
 * 总：36.92
 * 灵魄：禁卫4 0.42 * 4  兰博 -4 0.5*2 0.82 奋迅 0.42 0.16 *2 专注 1.25*2 野兽 0.55*2
 * 总：7.84
 * BB： 18
 * 子女：5.5
 * 八阵图：6.5
 * 灵兽：0.08 * 7 + 0.25 + 0.12 + 1.2 + 0.7 + 0.5
 * 总： 3.33~3.5
 * 奥义： 14.5
 * 
 * 总：92.59
 * 
 */