<template>
    <HomeBox title="新鲜好物" subTitle="卫生级的 噢诶有事">
        <div>
            <HomeSmallImg :imgList="hotList"></HomeSmallImg>
        </div>
    </HomeBox>
    <HomeBox title="热卖推荐" subTitle="热卖商品 特价抢购">
        <div>
            <HomeSmallImg :imgList="newList"></HomeSmallImg>
        </div>
    </HomeBox>
</template>
<script setup>
import HomeBox from './HomeBox.vue';
import { findNewAPI, findHotAPI } from '@/apis/home'
import { ref, onMounted, defineProps } from 'vue'
import HomeSmallImg from './HomeSmallImg.vue';
const hotList = ref([])
const newList = ref([])
defineProps(['title', 'subTitle'])
onMounted(async () => {
    try {
        let res1 = await findNewAPI()
        hotList.value = res1.result
        let res2 = await findHotAPI()
        newList.value = res2.result
    } catch (error) {
        console.log('请求失败new');
    }
})
</script>
<style lang="scss">
.img-container {
    display: flex;
    justify-content: space-between;
}

.part-container {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // flex: 1 0 calc(100vw / 5);
    box-sizing: border-box;

    .name {
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .price {
        color: rgb(193, 106, 120);
    }

    .img {
        width: calc(100vw / 5);

    }

    // &:last-child {
    //     padding-right: 0; // 但最后一个 img 元素的右边距为 0
    // }
}
</style>
