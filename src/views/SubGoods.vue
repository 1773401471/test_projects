<template>sub123</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getGoodDetail } from '@/apis/goods'
import { useRouter } from "vue-router"
const route = useRouter()

onMounted(async () => {
    console.log(route, 'route.params.id');
    try {
        let res = await getGoodDetail(route.params.id)
        console.log(res.result, '详细信息');
    } catch (error) {
        console.log(11);
    }
})
</script>