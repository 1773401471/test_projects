<template>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
            <!-- <a href="/">{{ childList.name }}</a> -->
        </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 标签页 -->
    <el-tabs type="border-card" v-model="goodsData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime" class="tab-box">
            <HomeSmallImg :imgList="everyGoods.items"></HomeSmallImg>
        </el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum" class="tab-box">
            <HomeSmallImg :imgList="everyGoods.items"></HomeSmallImg>
        </el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum" class="tab-box">
            <HomeSmallImg :imgList="everyGoods.items"></HomeSmallImg>
        </el-tab-pane>
    </el-tabs>

</template>
<script setup>
import { getSubCategoryAPI } from '@/apis/category.js'
import HomeSmallImg from '@/components/home/HomeSmallImg.vue';
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
const route = useRoute()
const everyGoods = ref([])

console.log(route, 'route');
const goodsData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})
const getAllGoods = async () => {
    try {
        let res = await getSubCategoryAPI(goodsData.value)
        console.log(res.result, 'resres111');
        everyGoods.value = res.result
        console.log(everyGoods.value, 'everygoods.value');
    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    getAllGoods()
})

// tabs选中值发生改变
const tabChange = () => {
    console.log(goodsData.value.sortField, 'tttttttt');
    goodsData.value.page = 1 //将页面回退到第一页
    getAllGoods()
}


</script>
<style lang="scss" scoped>
.tab-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
}
</style>