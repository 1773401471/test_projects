<template>
    <div class="header-box">
        <div class="photo-box">
            <img src="@/assets/images/logo.png" style="width: 260px;">
            <div class="photo-title">
                <div v-for=" i in categoryList" :key="i.id">{{ i.name }}</div>
            </div>
        </div>
        <div class="input-box">
            <el-input placeholder="搜一搜" :prefix-icon="Search"></el-input>
        </div>

    </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
import { getCategoryList } from '@/apis/home'
import { ref, onMounted } from 'vue'
const categoryList = ref([])
onMounted(async () => {
    try {
        let result = await getCategoryList()
        categoryList.value = result.result
    } catch (error) {

    }

})

</script>
<style scoped lang="scss">
.header-box {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .photo-box {
        display: flex;

        .photo-title {
            display: flex;
            align-items: center;

            div {
                margin: auto 20px;
                padding-top: 20px;
                // align-items: center;
            }
        }
    }

    .input-box {
        padding-top: 20px;
    }

}
</style>