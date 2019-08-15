<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 21:28:06
 * @LastEditTime: 2019-08-15 18:43:37
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="shopCart_wrap" v-if="goodsItem">
        <div class="shopCart_box">
            <div class="shopCart_main">
                <div class="title">
                    <p>默认</p>
                    <span @click="close(false)">x</span>
                </div>
                <div class="info">
                    <img :src="goodsItem.mainImgUrl" alt="">
                    <div class="des">
                        <p>￥{{Type.salesPrice}}</p>
                        <p class="number">库存{{Type.store}}</p>
                    </div>
                </div>
                <div class="standard">
                    <p>{{standardInfo[0].aname}}</p>
                        <div>
                            <span v-for="(item,index) in standardInfo[0].attributeValueRelationVoList" :key="item.aid"
                            @click="check(index,item.vname)"
                            :class="[ index===ind ? 'active' : '' ]"
                            >{{item.vname}}</span>
                        </div>
                </div>
                <div class="num_wrap">
                    <p>数量</p>
                    <div class="num">
                        <span @click="addCart('-')">-</span>
                        <span>{{num}}</span>
                        <span @click="addCart('+')">+</span>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations, mapActions } from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            ind: 0,
            type: ''

        }
    },
    computed:{
        ...mapState({
            standardInfo: state=>state.goods.standardInfo, //产品规格
            goodsItem: state=>state.goods.goodsItem, //产品详情
            num: state=>state.goods.num, //数量
            Type: state=>state.goods.Type, //类型(数组)
        })
    },
    methods:{
        ...mapActions({
            changeType: "goods/changeType",

        }),
        ...mapMutations({
            hide: "goods/updateModual",
            addCartFn: 'goods/addCartFn',
            clear: 'goods/clear', // 清除type
            updateCheck: 'goods/updateCheck'//选择类型后更新类型
        }),
        //关闭弹框
        close(flag){
            this.hide(flag)
            //默认第一个
            if(this.standardInfo[0].attributeValueRelationVoList.length>1){
                this.updateCheck(this.type)
            }else{
                this.updateCheck(this.standardInfo[0].attributeValueRelationVoList[0].vname)
            }
          
        },
        //切换样式
        check(ind,type){
            this.ind = ind
            this.type = type
            this.updateCheck(type)
            this.changeType({pid: this.standardInfo[0].attributeValueRelationVoList[ind].pid,vids:`[${this.standardInfo[0].attributeValueRelationVoList[ind].vid}]`})
        },
        //添加购物车
        addCart(type){
            this.addCartFn({type:type, num:this.type.store})
        }
    },
    onLoad(){
        
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
                padding: 0 30rpx;
                border: .5px solid #ccc;
                margin: 20rpx;
                border-radius: 10rpx;
            }
            span.active{
                color:#fff;
                background: #33d6c5;
            }
        }
    }
    .number{
        color:#abaeb2;
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
            padding:10rpx 10rpx;
        }
       
    }

}

</style>