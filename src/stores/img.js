import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getImgList } from '@/apis/home'
export const useImgStore = defineStore('imgStore', () => {
    const imgList = ref([])
    const imgList2 = ref([])
    // 获取轮播图图片地址数据
    const getImgListData = async () => {
        try {
            let res = await getImgList()
            imgList.value = res.result
            console.log(imgList.value, '99');
            console.log('请求成功');
        } catch (error) {
            console.error('error')
        }
    }

    const getImgListData2 = async () => {
        try {
            let res = await getImgList('2')
            imgList2.value = res.result
        } catch (error) {
            console.error('error')
        }
    }
    return { imgList, getImgListData, imgList2, getImgListData2 }
})