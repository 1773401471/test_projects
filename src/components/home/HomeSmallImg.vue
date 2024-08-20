<template>
    <div v-for="i in imgList" :key="i.id" class="outter-box">
        <div class="content-box" :title="`${i.name}：${i.desc}`">
            <img v-lazy-img="i.picture" class="img-box">
            <div class="font-box">{{ i.name }}</div>
            <div class="font-box">{{ i.desc }}</div>
            <div class="price">￥{{ i.price }}</div>
        </div>


    </div>
</template>
<script setup>

defineProps(['imgList'])
</script>
<style lang="scss" scoped>
.outter-box {
    display: flex;
    flex: 1 1 20%;
    /* 每个图像占据20%的宽度，当行数不足4个时会自适应宽度 */
    max-width: 25%;
    /* 确保每行最多4个 */
    box-sizing: border-box;

    /* 确保内边距和边框不会影响宽度 */
    .content-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .img-box {
            width: 250px;
        }

        .font-box {
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center
        }

        .font-box:hover {
            cursor: pointer;
        }

        .font-box:hover::after {
            content: attr(title);
            /* 使用title属性的内容 */
            position: absolute;
            background: rgba(0, 0, 0, 0.7);
            /* 背景色 */
            color: #fff;
            /* 文字颜色 */
            padding: 5px;
            border-radius: 5px;
            white-space: normal;
            /* 允许换行 */
            z-index: 10;
            left: 0;
            /* 调整位置 */
            top: 100%;
            /* 在文本下方显示 */
            transform: translateY(5px);
            /* 稍微偏移 */
            width: max-content;
            /* 自动宽度 */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
    }

}

.price {
    font-size: 18px;
    color: red
}
</style>