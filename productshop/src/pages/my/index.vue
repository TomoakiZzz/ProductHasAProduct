<template>
  <div class="my-warp">
    <div class="myTop">
      <p></p>
    </div>
    <div class="myBottom">
      <div class="myBottomList">
        <P class="myOrder">
          &nbsp;&nbsp;我的订单
          <span>查看全部订单&nbsp;>&nbsp;&nbsp;</span>
        </P>
        <div class="myList">
          <dl>
            <dt>
              <img src="../../../static/images/dfk.png" alt class="myList_img" />
            </dt>
            <dd>待付款</dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../static/images/daifahuo.svg" alt class="myList_img" />
            </dt>
            <dd>待发货</dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../static/images/daishouhuo.svg" alt class="myList_img" />
            </dt>
            <dd>待收货</dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../static/images/tuikuan.svg" alt class="myList_img" />
            </dt>
            <dd>退款退货</dd>
          </dl>
        </div>
      </div>
      <div class="myNr">
        <ul>
          <li>
            <img src="../../../static/images/zanwu.png" alt class="zw" />&nbsp;我的优惠券
            <span>
              <img src="../../../static/images/jt.png" alt class="right" />
            </span>
          </li>
          <li @click="clickAddress">
            <img src="../../../static/images/zanwu.png" alt class="zw" />&nbsp;收货地址
            <span>
              <img src="../../../static/images/jt.png" alt class="right" />
            </span>
          </li>
          <li>
            <img src="../../../static/images/zanwu.png" alt class="zw" />&nbsp;我的分享
            <span>
              <img src="../../../static/images/jt.png" alt class="right" />
            </span>
          </li>
          <li>
            <img src="../../../static/images/zanwu.png" alt class="zw" />&nbsp;联系客服
            <span>
              <img src="../../../static/images/jt.png" alt class="right" />
            </span>
          </li>
          <li>
            <img src="../../../static/images/zanwu.png" alt class="zw" />&nbsp;设置
            <span>
              <img src="../../../static/images/jt.png" alt class="right" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";

export default {
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
    clickAddress() {
      wx.navigateTo({
        url: "/pages/receivingAddress/main"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.my-warp {
  width: 100%;
  height: 100%;
  background: rgb(179, 219, 219);
}
.myTop {
  width: 100%;
  height: 300rpx;

  .myImgone {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: relative;
  }
}
.myBottom {
  width: 95%;
  height: auto;
  margin: -30rpx 20rpx;
  background: #fff;
  position: fixed;
}
.myBottomList {
  height: 300rpx;
  border: 2rpx solid #ccc;
  .myOrder {
    height: 120rpx;
    line-height: 120rpx;
    span {
      float: right;
      color: rgb(129, 129, 129);
    }
  }
}
.myList {
  width: 100%;
  height: 290rpx;
  display: flex;
  dl {
    flex: 2;
    text-align: center;
    dt {
      .myList_img {
        width: 100rpx;
        height: 80rpx;
      }
    }
  }
}
.myNr {
  width: 100%;
  height: auto;
  margin: 20rpx 0rpx;
  background: #fff;
  ul {
    width: 100%;
    height: 100%;
    li {
      height: 80rpx;
      line-height: 80rpx;
      font-size: 26rpx;
      border-bottom: 2rpx solid #ccc;
      span {
        float: right;
        margin-right: 20rpx;
      }
    }
  }
  .right {
    width: 30rpx;
    height: 30rpx;
  }
  .zw {
    width: 35rpx;
    height: 35rpx;
  }
}
</style>
