<template>
    <div>
        <Nav></Nav>
        <div style="margin: 0 120px;">
            <LayoutHeader></LayoutHeader>
            <HeaderFixed></HeaderFixed>
            <router-view></router-view>
        </div>
        <LayoutFooter></LayoutFooter>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategoryListData()
})

</script>
<style scoped lang="scss"></style>