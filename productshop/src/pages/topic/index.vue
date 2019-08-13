<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 19:22:18
 * @LastEditTime: 2019-08-14 00:45:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="shopcart_wrap">
    <!-- 购物车内容-->
    <div class="shopCart_content">
      <cartItem></cartItem>
      
    </div>
    <!-- 按钮-->
    <div class="shopCart_btnWrap">
      <div class="sum">
        <p><span class="check"></span>全选</p>
        <p>总计：<span>￥198</span></p>
      </div>
      <div class="button">
        <button class="edit">编辑</button>
        <button class="pay">去结算</button>
      </div>
    </div>
  </div>
</template>
<script>
import cartItem from "../../components/cartItem"
export default {
  props:{

  },
  components:{
    cartItem

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
.shopcart_wrap{
  width:100%;
  height:100%;
  background: #f3f7f7;
  display: flex;
  flex-direction: column;
}
.shopCart_content{
  flex: 1;
  overflow: scroll;
  padding: 20rpx;
  box-sizing: border-box;
}
.shopCart_btnWrap{
  background: #fff;
  height: 90rpx;
  display: flex;
  align-items: center;
}
.sum{
  flex:1;
  display: flex;
  justify-content: space-between;
  padding:0 20rpx;
  .check{
    display: inline-block;
    width: 30rpx;
    height:30rpx;
    border-radius: 50%;
    border: 1px solid #39d7e8;
  }
  .price{
    color:#f9476f;
  }
}
.button{
  display:flex;
}
button{
  width:180rpx;
  height: 90rpx;
  text-align: center;
  color: #fff;
  border-radius: none;
}
.edit{
  background: #3fd9dc;
}
.pay{
  background: #f9476f;
}



</style>