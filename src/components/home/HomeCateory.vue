<template>

    <div>
        <ul class="outter-ul">
            <!--  -->
            <li v-for="item in subList" :key="item.id" class="outter-li" @mouseover="getli(item)">
                <div class="caTitle">{{ item.name }}</div>
            <li class="subCaTitle" v-for="i in item.children.slice(0, 2) " :key="i.id">{{ i.name }}</li>

            <!-- hover层子元素 -->
            <div class="layer">
                <div>
                    <b style="font-size: 25px;">好物推荐</b>
                    <span style="margin-left: 8px;">根据您的购买记录或浏览记录推荐</span>
                </div>
                <ul class="ul-box">
                    <li v-for="i in curLi" :key="i.id" class="child-li">
                        <div style="width: 150px;">
                            <img v-lazy-img="i.picture">
                        </div>
                        <div class="text-box">
                            <div>{{ i.name }}</div>
                            <div class="desc">{{ i.desc }}</div>
                            <div>￥{{ i.price }}</div>
                        </div>
                    </li>
                </ul>
            </div>

            </li>
        </ul>

    </div>
</template>
<script setup>
import { getSubCategoryList } from '@/apis/home'
import { ref, onMounted } from 'vue'
const subList = ref({})
const curLi = ref([])
onMounted(async () => {
    try {
        let res = await getSubCategoryList()
        subList.value = res.result
        console.log(subList.value, 'uu');
    } catch (error) {

    }
})
const getli = (item) => {
    curLi.value = item.goods
}

</script>
<style lang="scss" scoped>
.outter-ul {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(131, 122, 122, .9);
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;

    .outter-li {
        display: flex;
        align-items: center;
        padding-left: 20px;
        flex: 1;

        &:hover {
            background-color: #2CAE90;
        }
    }

    .caTitle {
        font-size: 18px;
        font-weight: 700px;
        display: inline;
    }

    .subCaTitle {
        padding-left: 5px;
    }

    &:hover {
        .layer {
            display: block;
        }
    }

}

.layer {
    width: 1000px;
    height: 600px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;

    .ul-box {
        display: flex;
        flex-wrap: wrap;

        .child-li {
            display: flex;
            border: 1px solid grey;
            padding: 10px;
            margin: 5px;

            .text-box {
                width: 130px;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .desc {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

        }
    }

}
</style>