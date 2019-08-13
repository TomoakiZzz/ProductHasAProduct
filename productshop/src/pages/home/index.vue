<template>
  <div class="wrap-init">
    <div class="search">
      <div>
        <img src="../../../static/images/搜索(1).svg" alt/>搜索
      </div>
    </div>
    <TapBar/>
    <div class="banner-main">
    <swiper class="banner" :autoplay="swiper.autoplay" :indicator-dots="swiper.indicatorDots" :circular="swiper.circular">
        <swiper-item class="swiper-slider">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/6cc984ed212a767473a0035a69fb230c.jpg"
            alt
          />
        </swiper-item>
        <swiper-item class="swiper-slider">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/0e70ea98abbafa317be14dff67d17bfb.jpg"
            alt
          />
        </swiper-item>
        <swiper-item class="swiper-slider">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/a9e77b18c775843d3d04ea67a0489f4a.jpg"
            alt
          />
        </swiper-item>
    </swiper>
  </div>
  </div>
</template>
<script>
import TapBar from "../../components/tapBar";
import {mapActions} from "vuex"
export default {
  props: {},
  components: {
    TapBar
  },
  data() {
    return {
      swiper:{
        autoplay:true,
        interval:2000,
        indicatorDots:true,
        circular:true
      }
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      getHomeListData:"home/getHomeListData"
    })
  },
  onLoad(){
    this.getHomeListData()
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrap-init {
  width: 100%;
  height: 100%;
  .search {
    padding: 0 20rpx;
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
  .banner-main {
    width: 100%;
    height: 39.5vw;
    padding: 0 10rpx;
    margin-top: 10rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
    .banner{
      width: 100%;
      height: 100%;
      .swiper-slider{
        width: 100%;
        height: 100%;
      }
      img{
        width: 100%;
        height: 100%;
        border-radius: 6rpx;
      }
    }
  }
}
</style>