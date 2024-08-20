import httpInatance from "@/utils/http";

// 获取各个子菜单中的数据
export const getChildList = (id) => {
    return httpInatance({
        url: '/category',
        params: {
            id
        }
    })
}

// 获取二级分类列表数据
export const getCategoryFilterAPI = (id) => {
    return request({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}