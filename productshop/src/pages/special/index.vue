<template>
  <div class="specialWrap">
    <div class="banner">
      <!-- <img src="/static/images/Bitmap(1).svg" alt /> -->
      <image src="/static/images/Bitmap(1).svg"></image>
    </div>
    <div>
      <ul class="specialNav">
        <li class="active">爆款专区</li>
        <li>衣物清洁</li>
        <li>家庭清洁</li>
        <li>清洁工具</li>
      </ul>
      <div class="hotSpecial">
        <div class="hotTitle">
          <span></span>
          <h3>爆款专区 惊喜特卖</h3>
          <span></span>
        </div>
        <div class="specialContent">
          <div class="specialContentWrap">
           <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>￥<span>22</span>.90</p>
                <em>￥216</em>
              </div>
            </div>
            <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>￥<span>22</span>.90</p>
                <em>￥216</em>
              </div>
            </div>
            <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>￥<span>22</span>.90</p>
                <em>￥216</em>
              </div>
            </div>
            <div class="specialItem">
              <div class="specialImg">
                <img src="/static/images/product.png" alt />
              </div>
              <div class="productTitle">嘉宝Gerber DHA+</div>
              <div class="productPrice">
                <p>￥<span>22</span>.90</p>
                <em>￥216</em>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      ind:0
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.specialWrap {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
  box-sizing: border-box;
  .banner {
    width: 100%;
    height: 200rpx;
    margin-top:none;
    // image{
    //     margin-top:none;
    //     // width: 320rpx;
    //     width: 100%;
    //     height: 116rpx;
    //     display: inline-block;
    //     // overflow: hidden;
    // }
    // img{
    //     margin-top:none;
    //     // width: 320rpx;
    //     width: 100%;
    //     height: 116rpx;
    //     display: inline-block;
    //     overflow: hidden;
    // } 
    // margin-bottom:none;
  }
  .specialNav{
      margin-top:220rpx;
      width: 100%;
      display: flex;
      align-items: center;
      height: 100rpx;
      background: #fff;
      li{
        flex: 1;
        text-align: center;
        height: 100rpx;
        line-height:100rpx;
      }
      .active{
        border-bottom: 2rpx solid #fc5d7b;
        color:#feafbe;
      }
    }
    .hotSpecial{
      width: 100%;
      height: 100%;
      .hotTitle{
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        display: flex;
        align-items: center;
        justify-content:space-around;
        text-align: center;
        // background: #f3f7f7;
        background: #fc5d7b;
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
          span{
            width: 90rpx;
            height: 6rpx;
            display: inline-block;
            background: #484848;
        }
      }
      .specialContent{
        width: 100%;
        height: 100%;
         .specialContentWrap{
           width: 100%;
           height: 100%;
           display: flex;
           flex-wrap: wrap;
          //  margin: 20rpx 0;
           .specialItem{
             width: 48%;
             height: 300rpx;
            // height: 100%;
             text-align: center;   ///
             margin:20rpx auto;
            //  margin: 20rpx 6rpx;
             border-radius: 10rpx;
             padding:6rpx 7rpx;
             background:pink;
             .specialImg{
               width: 60%;
               height: 50%;
              //  text-align: center;
               margin:20rpx auto;
               img{
                  width: 100%;
                  height: 100%;
               }
             }
             .productTitle{
                color:#323a45;
                 text-align: center;
             }
             .productPrice{
                width: 100%;
                display: flex;
                // text-align: left;
                // margin-left: 10rpx;
               p{
                  color:#fc5d7b;
                  font-size: 28rpx;
                 span{
                   font-size: 36rpx;
                 }
               }
                em{
                   font-size: 30rpx;
                   color:#999da2;
                   text-decoration: line-through;
                   line-height: 60rpx;
                }
             }
           }
         }
      }
    }
}
</style>