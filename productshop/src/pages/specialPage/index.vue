<template>
  <div class="wrap" v-if="specialData && specialData.anchors">
    <div class="specialBan">
      <div class="specialBanPic">
        <img :src="specialData.specialImg" alt>
      </div>
      <div class="specialTitle">
        <span class="active" v-for="item in specialData.anchors" :key="item.said">{{item.anchorName}}</span>
      </div>
    </div>

    <div class="specialShopWrap">
      <div class="shopTitle">
        <span></span>
        <b></b>
        <i>{{specialData.anchors[0].anchorDesc}}</i>
        <b></b>
        <span></span>
      </div>

      <div class="shopList">
        <dl class="shopItem" v-for="item in specialData.anchors[0].products" :key="item.cid">
          <dt class="shopPic">
            <img :src="item.mainImgUrl" alt>
          </dt>
          <dd class="shopContext">
            <p class="shopName">{{item.title}}</p>
            <p class="shopPirce">
              <span>￥</span>
              <span>{{item.salesPrice}}</span>
            </p>
            <p class="discounts">
              <span>{{item.earnMoney}}</span>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      specialData: state => state.home.specialData
    })
  },
  methods: {
    ...mapActions({
      getSpecial: "home/getSpecial"
    })
  },
  onLoad(options) {
    console.log(options, "optionsId");
    this.getSpecial({ siid: options.businessId });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  background: #f3f7f7;
  .specialBan {
    width: 100%;
    .specialBanPic {
      width: 100%;
      img {
        width: 100%;
        height: 300rpx;
      }
    }
  }
  .specialTitle {
    width: 100%;
    height: 92rpx;
    line-height: 92rpx;
    display: flex;
    white-space: nowrap;
    border-bottom: 2rpx solid #ececec;
    justify-content: space-between;
    background: #fff;
    span {
      height: 92rpx;
      margin: 0 20rpx;
      // flex: 1;
      display: inline;
    }
    .active {
      color: red;
      border-bottom: 4rpx solid red;
    }
  }
  .specialShopWrap {
    width: 100%;
    .shopTitle {
      width: 100%;
      display: flex;
      height: 150rpx;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      span {
        width: 68rpx;
        height: 2rpx;
        background: #484848;
      }
      b {
        width: 14rpx;
        height: 14rpx;
        background: #484848;
        transform: rotate(45deg);
      }
      i {
        font-size: 28rpx;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #484848;
        font-style: normal;
        padding: 0 60rpx;
      }
    }
  }
}
.shopList {
  width: 100%;
  padding: 8rpx;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  dl.shopItem {
    width: 236rpx;
    height: 484rpx;
    background: #fff;
    border-radius: 10rpx;
    overflow: hidden;
    margin: 10rpx 0 0 8rpx;
    box-sizing: border-box;
    .shopPic {
      width: 100%;
      height: 264rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .shopContext {
      .shopName {
        box-sizing: border-box;
        padding: 10rpx;
        width: 254rpx;
        height: 80rpx;
        font-size: 24rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #323a45;
        line-height: 34rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .shopPirce {
        width: 100%;
        display: flex;
        margin-top: 10rpx;
        span:first-of-type {
          width: 18rpx;
          height: 32rpx;
          font-size: 28rpx;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: #fc5d7b;
          line-height: 32rpx;
          margin-top: 20rpx;
        }
        span:last-of-type {
          height: 64rpx;
          font-size: 36rpx;
          font-family: DINAlternate-Bold;
          font-weight: 700;
          color: #fc5d7b;
          line-height: 62rpx;
          margin-top: 2rpx;
          width: 38rpx;
          margin-left: 8rpx;
        }
      }
      .discounts {
        height: 24rpx;
        font-size: 22rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999da2;
        line-height: 24rpx;
        color: #fc5d7b;
      }
    }
  }
}
</style>