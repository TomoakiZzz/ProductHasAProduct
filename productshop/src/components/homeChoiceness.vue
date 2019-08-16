<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 19:57:53
 * @LastEditTime: 2019-08-16 12:06:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="choiceness">
    <div class="choicenessItem" v-for="item in choicenessList" :key="item.title" @click="goToDetail(item)">
      <div class="choicenessImg">
        <img :src="item.imgUrl" alt>
      </div>
      <div class="choicenessCon">{{item.title}}</div>
      <div class="choicenessPirce">￥{{item.vipPrice}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    choicenessList: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
     goToDetail(){
       let arr = this.Item.jumpUrl.split("&")
       let newArr=arr.map(item=>{
         return item.split("=")
       })
      // //跳转详情
      wx.navigateTo({url:`/pages/goodsDetail/main?id=`+Object.fromEntries(newArr).businessId})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.choiceness {
  width: 100%;
  padding-bottom:20rpx ;
  display: flex;
  flex-wrap: wrap;
  .choicenessItem {
    width: 30vw;
    margin-left: 2.5vw;
    .choicenessImg {
      width: 30vw;
      height: 30vw;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .choicenessCon {
      font-size: 28rpx;
      color: #323a45;
      line-height: 40rpx;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .choicenessPirce {
      font-size: 28rpx;
      color: #fc5d7b;
    }
  }
}
</style>