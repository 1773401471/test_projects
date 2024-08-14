<template>
    <div class="outter-box">
        <div class="nav-box">
            <div>用户名称</div>
            <div>退出登录</div>
            <div>我的订单</div>
            <div>会员中心</div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped lang="scss">
.outter-box {
    width: 100vw;
    height: 40px;
    background-color: #242423;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 300;

    .nav-box {
        position: absolute;
        right: 40px;
        display: flex;

        &>div {
            padding-left: 10px;
            padding-right: 10px;
        }

        &>div:not(:last-child) {
            border-right: 2px grey solid;

        }
    }
}
</style>