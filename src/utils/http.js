import axios from 'axios'

const httpInatance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/',
    timeout: 3000
})

// axios 请求拦截器
httpInatance.interceptors.request.use(config => {
    return config
}, err => Promise.reject(e))
// axios 响应拦截器
httpInatance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})
export default httpInatance