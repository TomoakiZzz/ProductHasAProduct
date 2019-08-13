<template>
  <div class="wrap-init">
    <div class="search">
      <div>
        <img src="../../../static/images/搜索(1).svg" alt/>搜索
      </div>
    </div>
    <TapBar/>
  
  </div>
</template>
<script>
import TapBar from "../../components/tapBar";
// import Swiper from "swiper";
export default {
  props: {},
  components: {
    TapBar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrap-init {
  width: 100%;
  height: 100%;
  .search {
    padding: 0 20px;
    width: 100%;
    > div {
      background: #f6f6f6;
      border-radius: 6rpx;
      display: flex;
      height: 60rpx;
      align-items: center;
      font-size: 24rpx;
      color: #a8acb0;
      img {
        width: 26rpx;
        height: 26rpx;
        margin: 0 12rpx;
      }
    }
  }
  .banner {
    width: 100%;
    height: 39.5vw;
    padding: 0 10rpx;
    margin-top: 10rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
    > .swiper-slider {
      width: 100%;
      
    }
  }
}
</style>
