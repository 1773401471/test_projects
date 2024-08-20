import httpInatance from '@/utils/http.js'

// 获取首页分类数据
export const getCategoryList = () => {
    return httpInatance({
        url: '/home/category'
    })
}
// 获取轮播图数据
export const getImgList = () => {
    return httpInatance({
        url: '/home/banner'
    })
}

// home获取二级分类数据
export const getSubCategoryList = () => {
    return httpInatance({
        url: '/home/category/head'
    })
}

// 获取新鲜好物图片数据
export const findNewAPI = () => {
    return httpInatance({
        url: '/home/new'
    })
}
// 获取热卖好物图片数据
export const findHotAPI = () => {
    return httpInatance({
        url: '/home/hot'
    })
}