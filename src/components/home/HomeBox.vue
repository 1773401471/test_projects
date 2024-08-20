<template>
    <div class="home-container">
        <div class="title-box">
            <div class="title">{{ title }}</div>
            <div class="sub-title">{{ subTitle }}</div>
        </div>
        <!-- 主体区域 -->
        <slot />
    </div>
</template>
<script setup>
defineProps(['title', 'subTitle'])

</script>
<style lang="scss" scoped>
.home-container {
    margin-top: 5px;
}

.title-box {
    display: flex;
    align-items: end;
    margin-bottom: 5px;

    .title {
        font-size: 20px;
    }

    .sub-title {
        margin-left: 10px;
    }
}
</style>