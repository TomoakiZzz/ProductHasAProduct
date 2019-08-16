<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 00:18:35
 * @LastEditTime: 2019-08-16 14:26:55
 * @LastEditors: Please set LastEditors
 -->
<template>
    <!-- 购物车 没件商品-->
    <div class="cartItem">
        <span class="check"></span>
        <img src="../../static/images/dfh.png" alt="">
        <div class="product_des">
            <p class="title">1111</p>
            <p class="standard">111111111</p>
            <div class="product_info">
                <p class="price">98</p>
                <div><span>-</span><span>1</span><span>+</span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

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
.cartItem{
    width:100%;
    display:flex;
    background: #fff;
    align-items: center;
    margin-bottom:20rpx;
    padding: 20rpx;
    box-sizing: border-box;
    img{
        width:200rpx;
        height:200rpx;
    }
    .check{
        display: inline-block;
        width: 30rpx;
        height:30rpx;
        border-radius: 50%;
        border: 1px solid #39d7e8;
    }
    .product_des{
        width:100%;
        flex:1;
       
    }
    .product_info{
        display: flex;
        justify-content: space-between;
        span{
            padding: 10rpx 20rpx;
            border:1px solid #ccc;
        }
    }
    .price{
        color:#f9526c;
    }
    

}

</style>