<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 15:04:54
 * @LastEditTime: 2019-08-15 19:04:14
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="order_wrap">
        <p class="alert">提交订单后30:00内付款，订单已取消</p>
        <div class="order_main">
            <!-- 超时取消-->
            <div class="cancel">
                <h3>超时取消</h3>
                <p>订单编号：122998873773<span>复制</span></p>
            </div>
            <!-- 收货地址-->
            <div class="address">
                <div class="user_info">
                    <span>李倩</span><span>1537889889</span>
                </div>
                <p>定位地址 北京市爱空间四大皆空</p>
            </div>
            <!-- 产品详情-->
            <productInfo></productInfo>
            <div>
                <div class="product_price">
                    <span>运费</span>
                    <span>x1</span>
                </div>
                <div class="product_price">
                    <span>订单总计</span>
                    <span>x1</span>
                </div>
                <div class="product_price">
                    <span>实付金额</span>
                    <span>x1</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import productInfo from "../../components/productItem"
export default {
    props:{

    },
    components:{
        productInfo

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.order_wrap, .order_main{
    width:100%;
    height:100%;
    overflow: hidden;
}
.order_main{
    padding: 20rpx;
    box-sizing: border-box;
    background: #f3f7f7;
}
.order_main>div{
    background: #fff;
    width:100%;
    box-sizing: border-box;
    padding: 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
}
.alert{
   width:100%;
   height: 50rpx;
   background: #fff6f6;
   padding-left: 30rpx;
   box-sizing: border-box;
}
.cancel,.address{
    h3,.user_info{
        font-size: 34rpx;
        font-weight: 600;
        height: 80rpx;
        line-height: 80rpx;
    }
    p{
        height: 60rpx;
        line-height: 60rpx;
        span{
            padding:0 20rpx;
            border: 1px solid #fc5d7b;
            color:#fc5d7b;
            margin-left: 30rpx;
        }
    }
}
.product_price{
    width:100%;
    display: flex;
    justify-content: space-between;
    height: 60rpx;
    align-items: center;
}

</style>