<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 19:39:44
 * @LastEditTime: 2019-08-15 18:44:30
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="order_detail">
    <p class="time">111111111111111111111111</p>
    <div class="product_detail">
      <img src="../../static/images/Group 2.svg" alt />
      <div class="product_des">
        <p class="product_title">我就死按大家开始的萨克雷达</p>
        <p class="product_standard">规格：xl</p>
        <div class="product_price">
          <span>334</span>
          <span>x1</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.order_detail{
    padding: 20rpx;
    box-sizing: border-box;
    background: #fff;
}
.product_detail{
    width:100%;
    display: flex;
    img{
        width: 200rpx;
        height: 200rpx;
        margin-right: 20rpx;
    }
}
.product_des{
    flex: 1;
}
.product_price{
    width:100%;
    display: flex;
    justify-content: space-between;
    height: 60rpx;
    align-items: center;
}
.product_standard{
    color: #d0d2d4;
    font-size: 24rpx;
    margin: 20rpx 0 ;
}
</style>