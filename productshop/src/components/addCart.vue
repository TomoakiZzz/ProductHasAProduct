<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 21:28:06
 * @LastEditTime: 2019-08-14 00:50:58
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="shopCart_wrap" v-if="goodsItem">
        <div class="shopCart_box">
            <div class="shopCart_main">
                <div class="title">
                    <p>默认</p>
                    <span @click="hide(false)">x</span>
                </div>
                <div class="info">
                    <img :src="goodsItem.mainImgUrl" alt="">
                    <div class="des">
                        <p>￥{{goodsItem.salesPrice}}</p>
                        <p>库存{{goodsItem.title}}</p>
                    </div>
                </div>
                <div class="standard">
                    <p>{{standardInfo[0].aname}}</p>
                    <div>
                        <span v-for="item in standardInfo[0].attributeValueRelationVoList" :key="item.aid">{{item.vname}}</span>
                    </div>
                </div>
                <div class="num_wrap">
                    <p>数量</p>
                    <div class="num">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from "vuex"
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
        ...mapState({
            standardInfo: state=>state.goods.standardInfo,
            goodsItem: state=>state.goods.goodsItem,
        })

    },
methods:{
        ...mapMutations({
            hide: "goods/updateModual"
        })
        

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.shopCart_wrap{
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);
    position: fixed;
    bottom: 90rpx;
    .shopCart_box{
        position: absolute;
        bottom: 0rpx;
        left: 0;
        width:100%;
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 20rpx;
        box-sizing: border-box;
    }
    .shopCart_main{
        flex:1;
    }
    .title{
        width: 100%;
        height: 60rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info{
        width:100%;
        display: flex;
        img{
            width:200rpx;
            height:200rpx;
            margin-right: 20rpx;
        }
    }
    .standard{
        width: 100%;
        p{
            line-height: 48rpx;
        }
        >div{
            display: flex;
            flex-wrap: wrap;
            span{
                padding: 0 40rpx;
                border: 1px solid #ccc;
                margin: 20rpx;
                border-radius: 20rpx;

            }
        }
    }
    .num_wrap{
        width:100%;
        display:flex;
        justify-content: space-between;
        margin-top: 10rpx;
    }
    .num{
        span{
            border:.5px solid #ccc;
            padding: 20rpx;
        }
    }

}

</style>