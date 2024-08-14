import httpInatance from '@/utils/http.js'

// 获取首页分类数据
export const getCategoryList = () => {
    return httpInatance({
        url: '/home/category'
    })
}