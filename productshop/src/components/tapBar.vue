<template>
  <div class="tapBar">
    <div
      :class="{'active':ind===index}"
      v-for="(item,index) in topList"
      :key="item.cid"
      @click="clickcut(item.cid,index)"
    >{{item.cname}}</div>
  </div>
</template>
<script>
export default {
  props: {
    topList: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      ind: 0
    };
  },
  computed: {},
  methods: {
    clickcut(cid, index) {
      console.log(cid, "cid");
      wx.navigateTo({
        url: "/pages/particulars/main?cid=" + cid + "&index=" + index,
        success: function(res) {
          console.log(res, "res");
        },
        fail: () => {},
        complete: () => {}
      });
    }
  },
  onLoad(options) {
    console.log(this.topList, "数据");
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.tapBar {
  // width: 100%;
  display: flex;
  white-space: nowrap;
  height: 100rpx;
  line-height: 100rpx;
  overflow: scroll;
  &::-webkit-scrollbar {
    // &在sass中就表示要修饰的父元素即.pics_wall
    display: none;
  }
  > div {
    padding: 0 22rpx;
    height: 100%;
    font-size: 28rpx;
  }
  .active {
    font-weight: 600;
    position: relative;
    &:after {
      content: "";
      width: 36rpx;
      height: 6rpx;
      background: #48cfba;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>