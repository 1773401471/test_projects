import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryList } from '@/apis/home'
export const useCategoryStore = defineStore('categoryStore', () => {
    const categoryList = ref([])
    // 获取分类数据
    const getCategoryListData = async () => {
        try {
            let result = await getCategoryList()
            categoryList.value = result.result
        } catch (error) {
            console.error('error')
        }
    }
    return { categoryList, getCategoryListData }
})