<template>
  <div class="particulars">
    <div class="particularsTop"></div>
    <div class="particularsBottom">
      <div class="particulTop">
        <ul>
          <li :class="{'selected':tab === 1,'testTitle':true}" @click="changTab(1)">综合</li>
          <li :class="{'selected':tab === 2,'testTitle':true}" @click="changTab(2)">最新</li>
          <li :class="{'selected':tab === 3,'testTitle':true}" @click="changTab(3)">价格</li>
        </ul>
      </div>
      <div class="particulBottom">
        <div class="bottomNrZh" v-if="tab===1">
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
        </div>
        <div class="bottomNrZx" v-else-if="tab===2">最新</div>
        <div class="bottomNrjg" v-else>价格</div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";

export default {
  data() {
    return {
      tab: 1
    };
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    changTab(index) {
      this.tab = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.particulars {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #ccc;
  .particularsTop {
    width: 100%;
    height: 456rpx;
    background: #fff;
  }
}
.particularsBottom {
  width: 100%;
  height: auto;
  background: #fff;
  margin-top: 20rpx;
  .particulTop {
    height: 80rpx;
    left: 80rpx;
    line-height: 80rpx;
    text-align: center;
    ul {
      display: flex;
      li {
        flex: 3;
      }
    }
  }
  .particulBottom {
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 10rpx;
  }
}
.selected {
  color: blue;
}
.nr {
  width: 362rpx;
  height: 512rpx;
  background: #fff;
  float: left;
  margin-left: 10rpx;
  margin-top: 10rpx;
  .nrTop {
    height: 310rpx;
    .particulars_img {
      width: 180rpx;
      height: 260rpx;
      margin-left: 25%;
      margin-top: 38rpx;
    }
  }
  .nrBottom {
    line-height: 40rpx;
    strong {
      color: red;
      border: 2rpx solid red;
      display: inline-block;
      font-size: 25rpx;
    }
    b {
      color: red;
      font-size: 35rpx;
      margin-top: 10rpx;
    }
    i {
      margin-top: 10rpx;
      em {
        background: pink;
        color: rgb(194, 39, 65);
        display: inline-block;
        margin-left: 10rpx;
      }
    }
  }
}
// .particulars_img
</style>
