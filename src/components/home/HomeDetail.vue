<template>
    <div v-for="i in allGoods" :key="i.id" class="con-box">
        <div class="name">{{ i.name }}</div>
        <div class="outter-box">
            <!-- 左边大图 -->
            <img v-lazy-img="i.picture" class="img-box">
            <!-- 右边多个小图 -->
            <div class="right-list-box">
                <HomeSmallImg :imgList="i.goods"></HomeSmallImg>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getAllGoods } from '@/apis/home'
import HomeSmallImg from './HomeSmallImg.vue';

const allGoods = ref([])
onMounted(async () => {
    try {
        let res = await getAllGoods()
        allGoods.value = res.result
        console.log(allGoods.value, '所有商品数据');
    } catch (err) {
        console.log(err, 'err错误信息');
    }
})

</script>
<style lang="scss" scoped>
.name {
    font-size: 28px;
    margin: 10px auto;
}

.outter-box {
    display: flex;
    justify-content: space-between;


    .img-box {
        width: 20vw;
    }

    .right-list-box {
        display: flex;
        // flex: 1;
        flex-wrap: wrap;
        /* 允许换行 */
        gap: 10px;
        /* 图片间的间距 */
        padding-left: 45px;
    }
}
</style>