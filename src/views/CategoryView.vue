<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
            <a href="/">{{ childList.name }}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
    <el-carousel indicator-position="outside" height="580px" style="margin-top: 20px;">
        <el-carousel-item v-for="item in getImgList.imgList2" :key="item.id">
            <img :src="item.imgUrl" style="width: 100%;">
        </el-carousel-item>
    </el-carousel>

    <!-- 商品渲染 -->
    <div v-for="i in childList.children" :key="i.id">
        <!--  -->
        <div class="big-title">{{ i.name }}</div>
        <!-- 单个商品数据渲染 -->
        <div class="goods-box">
            <div class="singal-box" v-for="item in i.goods" :key="item.id">
                <img v-lazy-img="item.picture" class="img-box">
                <div class="name">{{ item.name }}</div>
                <div class="desc"> {{ item.desc || '暂无详细描述信息' }}</div>
                <div class="price"> ￥{{ item.price }}</div>

            </div>

        </div>

    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useImgStore } from '@/stores/img.js'
import { getChildList } from '@/apis/category.js'
const route = useRoute()
const childList = ref([])
const getImgList = useImgStore()


onMounted(async () => {
    try {
        getImgList.getImgListData2()
        let res = await getChildList(route.params.id)
        childList.value = res.result
    } catch (error) {
        console.log(err, 'err');
    }
})
</script>
<style scoped lang="scss">
.big-title {
    font-size: 28px;
    margin: 20px;
}

.goods-box {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: rgb(232, 226, 226);

    // flex-direction: column;
    .singal-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;

        .img-box {
            max-width: 180px;
        }

        .name {
            text-align: center;
        }

        .desc {
            width: 160px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .price {
            text-align: center;
            color: red
        }
    }

}
</style>