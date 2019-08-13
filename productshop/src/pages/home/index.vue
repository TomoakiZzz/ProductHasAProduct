<template>
  <div class="wrap-init" v-if="homeListData && homeListData[0]">
    <div class="search">
      <div>
        <img src="../../../static/images/搜索(1).svg" alt>搜索
      </div>
    </div>
    <TapBar/>
    <div class="banner-main">
      <swiper
        class="banner"
        :autoplay="swiper.autoplay"
        :indicator-dots="swiper.indicatorDots"
        :circular="swiper.circular"
      >
        <swiper-item v-for="item in homeListData[0].items" :key="item.sortId" class="swiper-slider">
          <img :src="item.imgUrl" alt>
        </swiper-item>
      </swiper>
    </div>
    <div class="classifyList">
      <div class="classifyItem" v-for="item in homeListData[1].items" :key="item.sortId">
        <div class="classifyItem-img">
          <img :src="item.imgUrl" alt>
        </div>
        <div class="classifyItem-title">{{item.title}}</div>
      </div>
    </div>
    <div class="banImg">
      <img :src="homeListData[2].pictUrl">
    </div>
    <div class="vipMain">
      <div class="vipList" :style="{backgroundImage:'url('+homeListData[3].pictUrl+')'}"></div>
      <div class="vipItem" v-for="item in homeListData[3].items" :key="item.title">
        <div>
          <img :src="item.imgUrl" alt>
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="banImg">
      <img :src="homeListData[4].pictUrl">
    </div>
    <HomeClassifyTitle/>
    <HomeChoiceness :choicenessList="homeListData[5].items"/>
    <div class="banImg">
      <img :src="homeListData[6].pictUrl">
    </div>
    <HomeClassifyTitle/>
    <HomeChoiceness :choicenessList="homeListData[7].items"/>
    <div class="banImg">
      <img :src="homeListData[8].pictUrl">
    </div>
    <HomeClassifyTitle/>
    <HomeChoiceness :choicenessList="homeListData[9].items"/>
    <div class="banImg">
      <img :src="homeListData[10].pictUrl">
    </div>
    <HomeClassifyTitle/>
    <HomeChoiceness :choicenessList="homeListData[11].items"/>
    <div class="banImg">
      <img :src="homeListData[12].pictUrl">
    </div>
    <HomeClassifyTitle/>
    <HomeChoiceness :choicenessList="homeListData[13].items"/>
    <HomeClassifyTitle/>
    
  </div>
</template>
<script>
import TapBar from "../../components/tapBar";//分类tab
import HomeClassifyTitle from "../../components/homeClassifyTitle"//精选标题
import HomeChoiceness from "../../components/homeChoiceness"//精选内容
import BetterShopList from "../../components/betterShopList"//betterScroll商品列表
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {
    TapBar,
    HomeClassifyTitle,
    HomeChoiceness
  },
  data() {
    return {
      swiper: {
        autoplay: true,
        interval: 2000,
        indicatorDots: true,
        circular: true
      }
    };
  },
  computed: {
    ...mapState({
      homeListData: state => state.home.homeListData
    })
  },
  methods: {
    ...mapActions({
      getHomeListData: "home/getHomeListData"
    })
  },
  onLoad() {
    this.getHomeListData();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrap-init {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
    .banner {
      width: 100%;
      height: 100%;
      .swiper-slider {
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 6rpx;
      }
    }
  }
  .classifyList {
    width: 100%;
    display: flex;
    padding-bottom: 20rpx;
    .classifyItem {
      flex: 1;
      .classifyItem-img {
        width: 114rpx;
        height: 114rpx;
        margin: 0 auto;
        margin-bottom: 16rpx;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .classifyItem-title {
        width: 100%;
        text-align: center;
        font-size: 24rpx;
      }
    }
  }
  .banImg {
    width: 100%;
    height: 208rpx;
    padding: 0 2%;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 30rpx;
    }
  }
}
.vipMain {
  position: relative;
  padding-top: 300rpx;
  display: flex;
  flex-wrap: wrap;
  .vipList {
    padding: 0 1%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 280rpx;
    background-size: cover;
  }
  .vipItem {
    width: 50%;
    padding: 0 2%;
    padding-bottom: 2%;
    > div {
      width: 100%;
      height: 300rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 24rpx;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 40rpx;
    }
  }
}
</style>
