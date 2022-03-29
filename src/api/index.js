/*
 * @Description: 
 * @Author: znh
 * @Date: 2022-03-29 10:26:57
 */
import axios from 'axios'

axios.interceptors.response.use(res => res.data.result, err => Promise.reject(err))

export default axios