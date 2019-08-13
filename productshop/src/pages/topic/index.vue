<template>
  <div class="topic-warp">
    <div class="topicTop">
      <span>
        <input type="radio" />
      </span>
      <p>
        <img src="../../../static/images/tuikuan.svg" alt class="topic_img" />
      </p>
      <b>
        <p>帮宝适绿帮纸尿裤大号L2132323</p>
        <p>规格:Xl</p>
        <p>
          <em>￥52.50</em>
          <strong>
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </strong>
        </p>
      </b>
    </div>
    <div class="topicBottom">
      <span>
        <input type="radio" />全选
      </span>
      <p>
        总计:
        <b>￥198.8</b>
      </p>
      <button class="btn1">编辑</button>
      <button class="btn2">去结算</button>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.topic-warp {
  width: 100%;
  height: 100%;
  background: #ccc;
  .topicTop {
    width: 95%;
    height: 200rpx;
    background: #fff;
    margin: 20rpx 20rpx;
    display: flex;
    span {
      flex: 1;
      input {
        margin-top: 60rpx;
      }
    }
    p {
      flex: 3;
    }
    b {
      flex: 6;
      p {
        :nth-child(2) {
          width: 150rpx;
          height: 50rpx;
          border: 2rpx solid #ccc;
          display: flex;
          em {
            flex: 2;
          }
          strong {
            flex: 8;
            span {
              width: 20rpx;
              display: block;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .topicBottom {
    height: 100rpx;
    line-height: 100rpx;
    width: 100%;
    bottom: 0rpx;
    display: flex;
    position: fixed;
    border-top: 2rpx solid #ccc;
    span {
      flex: 2;
    }
    p {
      flex: 4;
      display: flex;
    }
    .btn1 {
      flex: 2;
      background: #45dcd5;
      color: #fff;
      border: 1rpx solid #45dcd5;
    }
    .btn2 {
      flex: 2;
      background: #f9506d;
      color: #fff;
      border: 1rpx solid #f9506d;
    }
  }
}
.topic_img {
  width: 140rpx;
  height: 124rpx;
}
</style>
