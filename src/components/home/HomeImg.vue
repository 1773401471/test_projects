<template>
    <el-carousel indicator-position="outside" height="580px" style="margin-top: 20px;">
        <el-carousel-item v-for="item in getImgList.imgList" :key="item.id">
            <img :src="item.imgUrl" style="width: 100%;">
        </el-carousel-item>
    </el-carousel>
</template>
<script setup>
import { onMounted } from 'vue';
import { useImgStore } from '@/stores/img.js'
const getImgList = useImgStore()
onMounted(() => {
    getImgList.getImgListData()
})


</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>