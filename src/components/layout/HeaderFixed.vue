<template>
    <div class="header-box" :class="{ show: y > 140 }">
        <div class="photo-title">
            <div v-for=" i in categoryStore.categoryList" :key="i.id">{{ i.name }}</div>
        </div>
    </div>
</template>
<script setup>

import { useScroll } from '@vueuse/core'
// 从仓库中获取分类列表数据categoryList
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()


// 顶部吸附
const { y } = useScroll(window)

</script>
<style scoped lang="scss">
.header-box {
    margin: 0 220px;
    position: fixed;
    top: 0;
    // 往上平移自身高度 + 完全透明
    transform: translateY(-100%);
    opacity: 0;

    // 移除平移 + 不透明
    &.show {
        transition: all .3s linear;
        transform: none;
        opacity: 1;
    }

    .photo-title {
        display: flex;
        align-items: center;
        background-color: rgb(169, 212, 167);
        height: 50px;

        div {
            margin: 0 45px;

        }

    }



}
</style>