<template>
  <div class="search-wrap">
    <div class="search">
      <div class="searchInp">
        <img src="../../../static/images/搜索(1).svg" alt>
        <input type="text" placeholder="搜索">
      </div>
      <div class="cancel">取消</div>
    </div>
    <div class="history">
      <span>历史搜索</span>
      <span>
        <img src="../../../static/images/删除.svg">
      </span>
    </div>
    <div class="historyList">
      <span>衣服</span>
      <span>衣服</span>
      <span>衣服</span>
      <span>衣服</span>
      <span>衣服</span>
      <span>衣服</span>
      <span>衣服</span>
      <span>衣服</span>
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
.search {
  padding: 0 20rpx;
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  > .searchInp {
    background: #ededed;
    border-radius: 10rpx;
    display: flex;
    height: 60rpx;
    align-items: center;
    flex: 1;
    font-size: 28rpx;
    img {
      width: 26rpx;
      height: 26rpx;
      margin: 0 12rpx;
    }
    input {
      cursor: auto;
      display: block;
      height: 1.4rem;
      text-overflow: clip;
      overflow: hidden;
      white-space: nowrap;
      font-family: UICTFontTextStyleBody;
      min-height: 1.4rem;
    }
  }
  .cancel {
    padding: 0 20rpx;
    font-size: 24rpx;
    color: #a8acb0;
  }
}
.history {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 30rpx 40rpx;
  font-size: 28rpx;
  color: #a8acb0;
  span {
    img {
      height: 32rpx;
      width: 32rpx;
    }
  }
}
.historyList {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding-left:40rpx;
    span{
        padding: 10rpx 38rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Regular;
        color: #333;
        background: #f5f5f4;
        border-radius: 12rpx;
        margin-bottom: 30rpx;
        margin-right: 28rpx;

    }
}
</style>