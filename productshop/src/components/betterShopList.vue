<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:04:04
 * @LastEditTime: 2019-08-16 14:30:06
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="betterList" @click="goToDetail()">
    <div class="shopPic">
      <img :src="Item.mainImgUrl" alt>
    </div>
    <div class="shopCon">
      <div class="shopTtile">{{Item.title}}</div>
      <div class="shopServe">
        <span>包邮</span>
        <span>报税</span>
      </div>
      <div class="shopPirce">
        <span>￥</span>
        <span>{{Item.salesPrice}}</span>
        <span>{{Item.vipPrice}}</span>
        <span>
          <img src="../../static/images/黑卡(1).svg" alt>
        </span>
        <span>赚￥{{Item.earnMoney}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Item: {
      type: Object
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
     goToDetail(){
       console.log(111)
      //  let arr = this.Item.jumpUrl.split("&")
      //  let newArr=arr.map(item=>{
      //    return item.split("=")
      //  })
      // // //跳转详情
      // wx.navigateTo({url:`/pages/goodsDetail/main?id=`+Object.fromEntries(newArr).businessId})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.betterList {
  display: flex;
  padding-right: 20rpx;
  box-sizing: border-box;
  margin: 20rpx 0;
  .shopPic {
    img {
      width: 200rpx;
      height: 216rpx;
      margin: 0 20rpx;
    }
  }
  .shopCon {
    .shopTtile {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 28rpx;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 20rpx;
      line-height: 2;
    }
    .shopServe {
      margin-bottom: 10rpx;
      span {
        border: 2rpx solid #fc5d7b;
        color: #fc5d7b;
        font-size: 20rpx;
        padding: 2rpx 6rpx;
        box-sizing: border-box;
        margin: 0 10rpx;
      }
    }
    .shopPirce {
      color: #fc5d7b;
      line-height: 2;
      span:first-of-type {
        font-size: 28rpx;
      }
      span:nth-of-type(2) {
        font-size: 44rpx;
      }
      span:nth-of-type(3) {
        margin-left: 10rpx;
        color: #a87831;
        font-size: 20rpx;
      }
      span:nth-of-type(4) {
        img {
          width: 42rpx;
          height: 20rpx;
          margin: 0 6rpx;
        }
      }
      span:nth-of-type(5) {
        font-size: 20rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #fc5d7b;
        line-height: 24rpx;
        background: #ffe8ed;
        margin-left: 10rpx;
        padding: 4rpx 0;
        box-sizing: border-box;
      }
    }
  }
}
</style>