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
    return httpInatance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}


/**
 * @description: 获取不同方式排序下的物品全部数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
    return httpInatance({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}