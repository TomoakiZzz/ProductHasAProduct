<template>
  <div class="specialWrap">
    <div class="top">
      <div class="banner">
        <!-- <image src="/static/images/Bitmap(1).svg"></image> -->
        <img src="/static/images/pro_banner_02.png" alt />
      </div>
      <h3>美容仪专区</h3>
    </div>
    <div class="hotSpecialWrap">
      <div class="hotSpecial">
        <!-- title -->
        <div class="hotTitle">
          <span></span>
          <h3>美容仪专区</h3>
          <span></span>
        </div>
        <!-- content -->
        <div class="specialContent">
          <div class="specialContentWrap">
            <!-- <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>
                  ￥
                  <span>22</span>.90
                </p>
                <em>赚￥6.95</em>
              </div>
            </div>-->

            <!-- <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>
                  ￥
                  <span>22</span>.90
                </p>
                <em>￥216</em>
              </div>
            </div>
            <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>
                  ￥
                  <span>22</span>.90
                </p>
                <em>￥216</em>
              </div>
            </div>
            <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>
                  ￥
                  <span>22</span>.90
                </p>
                <em>￥216</em>
              </div>
            </div>-->
            <!-- <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>
                  ￥
                  <span>22</span>.90
                </p>
                <em>￥216</em>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
   
    };
  },
  computed: {
    ...mapState({
      getSpecialList: state => state.special.specialData
    })
  },
  methods: {
    // 同步
    ...mapMutations({
      getMutaData: "special/specialList"
    }),
    // 异步
    ...mapActions({
      getSpecialData: "special/getSpecialDatas"
    })
  },
  created() {},
  mounted() {
    this.getSpecialData({ //171
      siid: 223
    });
  }
};
</script>
<style scoped lang="scss">
.specialWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f3f7f7;
  box-sizing: border-box;
  .top {
    width: 100%;
    height: 400rpx;
    position: fixed;
    z-index: 999;
    .banner {
      width: 100%;
      height: 300rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      height: 100rpx;
      line-height: 100rpx;
      margin-left: 10rpx;
      background: #fff;
      color: red;
      // background: cyan;
    }
  }
  .hotSpecialWrap {
    flex: 1;
    margin-top: 400rpx;
    .hotSpecial {
      width: 100%;
      // height: 100%;
      .hotTitle {
        width: 100%;
        height: 160rpx;
        background: red;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        background: #f3f7f7;
        // background: #fc5d7b;
        // :after{
        //     content: "";
        //     width: 30rpx;
        //     height: 6rpx;
        //     background: #484848;
        //     // background: #2196f3;
        //   }
        //   :before{
        //     content: "";
        //     width: 30rpx;
        //     height: 6rpx;
        //     background: #484848;
        //   }
        span {
          width: 20rpx;
          height: 20rpx;
          display: inline-block;
          background: #484848;
          //  -webkit-transform:rotate(180deg);
          transform: rotate(45deg);
        }
      }
      .specialContent {
        box-sizing: border-box;
        width: 100%;
        // height: 100%;
      }
      .specialContentWrap {
        width: 100%;
        // height: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: content-box;
        // justify-content: space-evenly;
        padding-bottom: 200rpx;
        .specialItem {
          width: 32%;
          height: 500rpx;
          text-align: center;
          margin-left: 10rpx;
          // margin:6rpx auto;
          // margin: 6rpx 3rpx;
          border-radius: 10rpx;
          padding: 6rpx 7rpx;
          background: #fff;
          .specialImg {
            width: 60%;
            height: 50%;
            margin: 50rpx auto;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .productTitle {
            color: #323a45;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .productPrice {
            width: 100%;
            // display: flex;
            text-align: left;
            p {
              color: #fc5d7b;
              font-size: 28rpx;
              span {
                font-size: 36rpx;
              }
            }
            em {
              font-size: 30rpx;
              color: #999da2;
              // text-decoration: line-through;
              line-height: 60rpx;
              // margin-left: 16rpx;
            }
          }
        }
      }
    }
  }
}
</style>