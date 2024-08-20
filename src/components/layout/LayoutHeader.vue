<template>
    <div class="header-box">
        <div class="photo-box">
            <img src="@/assets/images/logo.png" style="width: 260px;">

            <ul class="photo-title">

                <li>
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <!-- <li v-for=" i in categoryStore.categoryList" :key="i.id">
                    <RouterLink active-class="active" style="margin-left: 18px;" :to="`/category/${i.id}`">{{ i.name }}
                    </RouterLink>
                </li> -->

            </ul>
            <div class="input-box">
                <el-input placeholder="搜一搜" :prefix-icon="Search"></el-input>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
// 从仓库中获取分类列表数据categoryList
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()

</script>
<style scoped lang="scss">
.header-box {
    .photo-box {
        display: flex;
        justify-content: space-around;

        .photo-title {
            display: flex;
            justify-content: space-around;
            padding-top: 60px;
        }
    }

    .input-box {
        padding-top: 30px;
    }

    .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
    }
}
</style>