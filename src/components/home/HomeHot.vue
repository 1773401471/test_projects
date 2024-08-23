<template>
    <div>
        <div class="title-container">
            <div>热卖商品</div>
            <div>卫生级的 噢诶有事</div>
        </div>
        <HomeSmallImg :imgList="hotList"></HomeSmallImg>
    </div>
</template>
<script setup>
import { findNewAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'
import HomeSmallImg from './HomeSmallImg.vue';
const hotList = ref([])
onMounted(async () => {
    try {
        let res = await findNewAPI()
        hotList.value = res.result
    } catch (error) {
        console.log('请求失败new');
    }
})
</script>
<style lang="scss" scoped>
.part-container {
    display: inline-flex;
    flex-direction: column;
    background-color: pink;

    .name {
        width: 135px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;


    }

    img {
        width: 150px;
    }
}
</style>