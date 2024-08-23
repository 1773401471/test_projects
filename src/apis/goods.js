import httpInatance from "@/utils/http";
// 获取数据详细信息

export const getGoodDetail = (id) => {
    return httpInatance({
        url: '/goods',
        params: { id }
    })
}

// 查找周热榜/24小时热榜的商品

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return httpInatance({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}
