<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 21:06:43
 * @LastEditTime: 2019-08-16 09:26:25
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="goods_wrap" v-if="goodsItem">
    <div class="main">
      <!-- 轮播图-->
      <div class="swiper-container">
        <swiper
          class="banner"
          :autoplay="swiper.autoplay"
          :indicator-dots="swiper.indicatorDots"
          :circular="swiper.circular"
          v-if="goodsItem.supplierProductPictureVoList&&goodsItem.supplierProductPictureVoList.length"
        >
          <swiper-item v-for="item in goodsItem.supplierProductPictureVoList" :key="item.pid">
            <img :src="item.imgUrl" alt />
          </swiper-item>
        </swiper>
        <img :src="goodsItem.mainImgUrl" alt="" v-if="!(goodsItem.supplierProductPictureVoList&&goodsItem.supplierProductPictureVoList.length)">
      </div>
      <!-- 商品详情-->
      <div class="goods_info">
        <div class="goods_price_new">
          <div class="price">
            <span class="price_normal">￥{{goodsItem.salesPrice}}</span>
            <span class="price_vip">{{goodsItem.vipPrice}}</span>
          </div>
          <span class="share" @click="share">分享赚{{goodsItem.earnMoney}}</span>
        </div>
        <div class="goods_price_older">
          <span>市场价：{{goodsItem.marketPrice}}</span>
          <span>自提价：{{goodsItem.supplyPrice}}</span>
        </div>
        <div class="goods_title">{{goodsItem.title}}</div>
        <div class="goods_num">
          <span>凯迪包邮</span>
          <span>1</span>
        </div>
      </div>
      <!-- 选择产品规格-->
      <div class="goods_standard">
        <div class="goods_standard_info">
          <span>选择</span>
          <div class="goods_standard_check">
            <span v-for="item in standardInfo" :key="item.aid">{{item.aname}}</span>
          </div>
          <span>{{type}}</span>
          <i @click="showModule(true)">&gt;</i>
        </div>
        <div class="goods_standard_info">
          <span>领券</span>
          <div class="goods_standard_ticket">
            <span>每满300减35券</span>
            <span>满199减20券</span>
          </div>
          <i></i>
        </div>
        <div class="goods_standard_info">
          <span>说明</span>
          <div class="goods_standard_explain">假一赔十|7天无忧退货|一站式购齐</div>
        </div>
        <div class="goods_standard_info">
          <span>提示</span>
          <div class="goods_standard_msg">{{packageInfo}}</div>
        </div>
      </div>
      <!-- 产品描述 图片式-->
      <div class="goods_des">
        <p v-for="item in detailImg" :key="item.pid">
          <img
            :src="item.imgUrl"
            alt
            :style="{width:item.imgWidth?item.imgWidth+'rpx':'750rpx',height:item.imgHeight?item.imgHeight+'rpx':'478rpx'}"
          />
        </p>
      </div>
    </div>
    <!-- 弹窗选择规格 加入购物车-->
    <addCart v-if="isShow"></addCart>
    <!-- 添加购物车按钮-->
    <div class="goods_footer" v-if="!isShow">
      <button @click="share">分享赚{{goodsItem.earnMoney}}</button>
      <button @click="pay">立即购买</button>
    </div>
    <div class="goods_footer" v-if="isShow">
      <button @click="confirm">确定</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import addCart from "../../components/addCart";

export default {
  props: {},
  components: {
    addCart
  },
  data() {
    return {
      swiper: {
        autoplay: true,
        interval: 2000,
        indicatorDots: true,
        circular: true
      },
      id: ""
    };
  },
  onLoad(options) {
    console.log(this.isShow,'isShow')
    this.id=options.id
    this.getDataFn({ pid: Number(options.id) }); //获取详情
    this.check({ pid: Number(options.id) }); //
    this.getDetailImg({
      pid: Number(options.id),
      userIdentity: 2,
      basePid: Number(options.id)
    }); //详情图片
  },
  computed: {
    ...mapState({
      goodsItem: state => state.goods.goodsItem, //商品详情
      detailImg: state => state.goods.detailImg, //详情图片
      packageInfo: state => state.goods.packageInfo, //提示信息
      standardInfo: state => state.goods.standardInfo, //产品规格
      isShow: state => state.goods.isShow ,//弹窗显示
      type: state => state.goods.type, //选择产品类型
      Type: state => state.goods.Type,
      num: state => state.goods.num//商品数量
    })
  },
  methods: {
    ...mapActions({
      getDataFn: "goods/getDataFn", //请求商品详情数据
      getDetailImg: "goods/getDetailImg", //请求详情图片
      check: "goods/check",
      changeType: "goods/changeType",//改变类型
      addShop: "shop/addShop" //添加到购物车
    }),
    ...mapMutations({
      show: "goods/updateModual"
    }),
    share(){
        wx.navigateTo({url:`/pages/share/main?id=`+this.id})
    },
    showModule(flag){
        this.show(flag)
        this.changeType({pid: this.standardInfo[0].attributeValueRelationVoList[0].pid,vids:`[${this.standardInfo[0].attributeValueRelationVoList[0].vid}]`})
    },
    //点击确定
    confirm(){
       this.show(false)
    },
    //加入购物车
    pay(){
      if(this.num!==0){
         this.addShop({orderChannel:this.Type.commissionAmount, skuPidNums: `[{"pid":${this.Type.pid},"buyNum":${this.num},"skuKey":${this.Type.skuKey}}]`})
          // this.addShop({orderChannel:4, skuPidNums: '[{"pid":70563,"buyNum":1,"skuKey":"e29ffec7aa4bfa25f41bdb336c204873"}]'})
      }
    },
    onUnload(){
      this.show(false)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.goods_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f3f7f7;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: scroll;
}
.goods_footer {
  width: 100%;
  height: 90rpx;
  display: flex;
  button {
    flex: 1;
    background: #fc4c6d;
    color: #fff;
    text-align: center;
    border-radius: 0;
  }
}
.swiper-container {
  width: 100%;
  height: 500rpx;
  overflow: hidden;
  .banner {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.goods_info {
  width: 100%;
  padding: 20rpx;
  padding-right: 0;
  margin-bottom: 20rpx;
  box-sizing: border-box;
  background: #fff;
  
}
.goods_price_new {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price_normal {
    font-size: 40rpx;
    color: #fc4c6d;
  }
  .price_vip {
    font-size: 24rpx;
    color: #925700;
  }
  .share {
    font-size: 24rpx;
    border: 1px solid #fc4c6d;
    border-radius: 20rpx;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10rpx;
    color: #fc4c6d;
  }
}
.goods_price_older {
  height: 40rpx;
  line-height: 40rpx;
  font-size: 24rpx;
  color: #c1c3c7;
  margin-right: 20rpx;
  span {
    margin-right: 20rpx;
  }
}
.goods_title {
  width: 100%;
  font-size: 30rpx;
  line-height: 50rpx;
}
.goods_num {
  width: 100%;
  display: flex;
  font-size: 24rpx;
  color: #ddd;
  height: 40rpx;
  line-height: 40rpx;
}
.goods_des {
  width: 100%;
  p {
    width: 100%;
  }
}
.goods_standard {
  padding: 0 10rpx;
  box-sizing: border-box;
  background: #fff;
}
.goods_standard_info {
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 0.5px solid #f3f7f7;
  padding: 20rpx 0;
  > span {
    padding-right: 30rpx;
    color: #969696;
  }
  > div {
    flex: 1;
    color: #6b7179;
    &.goods_standard_ticket {
      color: #fc4c6d;
    }
    span {
      margin-right: 20rpx;
    }
  }
  i {
    padding: 0 30rpx;
  }
}
</style>