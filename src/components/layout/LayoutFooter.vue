<template>
    <div>
        <div class="foot-four">
            <div>
                <div class="main-title">
                    客户服务
                </div>
                <div class="small-title">
                    <div class="out-border">
                        <p> 在线客服</p>
                        <i class="iconfont  icon-jiazhengfuwu"></i>
                    </div>
                    <div class="out-border">
                        <p> 问题反馈</p>
                        <i class="iconfont   icon-datingqiuzhu"></i>
                    </div>
                </div>
            </div>
            <div>
                <div class="main-title">
                    关注我们
                </div>
                <div class="small-title">
                    <div class="out-border">
                        <p>公众号</p>
                        <i class="iconfont   icon-gongzhonghao"></i>
                    </div>
                    <div class="out-border">
                        <p> 微博</p>
                        <i class="iconfont   icon-weibo"></i>
                    </div>
                </div>
            </div>
            <div>
                <div class="main-title">
                    下载APP
                </div>
                <div class="small-title">
                    <div class="out-border">
                        <img src="@/assets/images/qrcode.jpg" class="img-box">
                    </div>
                    <div>
                        <div>扫描二维码</div>
                        <div>立马下载APP</div>
                        <el-button type="primary">下载页面</el-button>
                    </div>
                </div>
            </div>
            <div class="last-samll-box">
                <div>
                    服务热线
                </div>
                <div class="small-info">
                    <h3 style="font-size: 20px;font-weight: 600;">4000-0000-000</h3>
                    <p>周一至周五 8:00-18:00</p>
                </div>
            </div>
        </div>
        <div class="foot-bottom">
            <div>
                <div>价格亲民</div>
                <div>物流快捷</div>
                <div>品质新鲜</div>
            </div>
            <div>
                xxxxxxxxxxxxxxxxxx
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped lang="scss">
.foot-four {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}

.main-title {
    text-align: center;
    margin-bottom: 8px;
}

.small-title {
    display: flex;
    justify-content: space-around;

    .out-border {
        width: 80px;
        height: 80px;
        border: 1px solid grey;
        text-align: center;

        p {
            margin-top: 15px;
        }
    }

    div:first-child {
        margin-right: 5px;
    }

    .img-box {
        width: 60px;
        margin: 10px;
    }
}

.last-samll-box {
    text-align: center;

    .small-info {
        margin-top: 10px;
    }
}

.foot-bottom {
    background-color: #242423;
    color: white;
    overflow: hidden;

    &>div {
        display: flex;
        margin: 80px;

        justify-content: space-around;
        font-size: 25px;


    }
}
</style>