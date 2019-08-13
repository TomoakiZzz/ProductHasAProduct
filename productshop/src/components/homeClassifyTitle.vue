<template>
  <div class="title">
    <h3>
      精选好物
      <span>等你来抢</span>
    </h3>
    <span>
      <img src="../../static/images/Group 2.svg">
    </span>
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
.title {
  display: flex;
  font-size: 26rpx;
  justify-content: space-between;
  padding: 0 20rpx;
  margin: 6rpx 0;
  line-height: 3;
  h3 {
    font-size: 40rpx;
    padding-right: 20rpx;
    > span {
      border-left: 4rpx solid #ccc;
      padding-left: 20rpx;
      box-sizing: border-box;
      font-size: 32rpx;
    }
  }
  >span {
    width: 72rpx;
    height: 32rpx;
    margin-top: 44rpx;
    img{
        width: 100%;
        height: 100%;
    }
  }
}
</style>