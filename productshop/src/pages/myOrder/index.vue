<template>
  <div class="my-order">
    <div class="test">
      <div class="testNav">
        <div
          :class="{'selected':tab === index}"
          v-for="(item,index) in list"
          :key="index"
          @click="changTab(index)"
        >{{item}}</div>
      </div>
      <div class="container">
        <div>
          <div v-for="(item,index) in list" :key="index">{{tab}}</div>
        </div>
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
      list: ["全部", "代付款", "代发货", "待收货"],
      tab: 1
    };
  },
  computed: {},
  methods: {
    changTab(index) {
      this.tab = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  width: 100%;
  height: 100%;
  background: #ccc;
}
.test {
  width: 100%;
  height: 80rpx;
  background: #fff;
  .testNav {
    display: flex;
    height: 80rpx;
    line-height: 80rpx;
    div {
      flex: 2;
      text-align: center;
    }
    .selected {
      border-bottom: 4rpx solid #87caee;
    }
  }
}
.container{
  height:auto;
  margin-top:20rpx;
  background: #fff;
}
</style>
