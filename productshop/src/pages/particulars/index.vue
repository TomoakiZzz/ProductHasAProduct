<template>
  <div class="particulars">
    <div class="particularsTop">

      <!-- tab -->
      <div class="header">
      <p>今日推荐</p>
      <p v-for='(item,index) in sortInterfaceData' :key='index' :class="[index===number?'actives':'null']" @click="topTab(index)">{{item.cname}}</p>
    </div>

    <div class="top">
      <dl v-for="(item,index) in sortInterfaceData[number].childs" :key="index">
        <dt>
          <img class="img" :src="item.imgUrl" />
        </dt>
        <dd>{{item.cname}}</dd>
      </dl>
    </div>
    <!-- tab -->
      <!-- <TapBar v-for="item in sortInterfaceData" :key="item.cid">{{item}}</TapBar> -->
    </div>
    <div class="particularsBottom">
      <div class="particulTop">
        <ul>
          <li :class="{'selected':tab === 1}" @click="changTab(1)">综合</li>
          <li :class="{'selected':tab === 2}" @click="changTab(2)">最新</li>
          <li :class="{'selected':tab === 3}" @click="changTab(3)">价格
            <em>
              <span :class="[flag===true?'shangs':'shang']">△</span>
          <span :class="[flag===false?'xias':'xia']">▽</span>
            </em></li>
        </ul>
      </div>
      <div class="particulBottom">
        <div class="bottomNrZh" v-if="tab===1">
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
          <div class="nr">
            <p class="nrTop">
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/7a4d89d7d72c1f476a0480686a1823bc.png"
                alt
                class="particulars_img"
              />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥189</b>
              <i>
                ￥189
                <em>赚￥14.41</em>
              </i>
            </span>
          </div>
        </div>
        <div class="bottomNrZx" v-else-if="tab===2">最新</div>
        <div class="bottomNrjg" v-else>价格</div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import TapBar from "../../components/tapBar";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tab: 1,
      flag: true,
      number:1
    };
  },
  components: {
    TapBar
  },
  computed: {
    ...mapState({
      CategoryListData: state => state.page.CategoryListData,
      classifyProductData: state => state.page.classifyProductData,
      sortInterfaceData: state => state.page.sortInterfaceData
    })
  },
  methods: {
    ...mapActions({
      getCategoryLists: "page/getCategoryLists",
      classifyProducts: "page/classifyProducts",
      sortInterfaces:"page/sortInterfaces"
    }),
    topTab(index){
    this.number = index;
    },
     changTab(index) {
      this.tab = index;
    }
  },
  onLoad(options) {
    console.log(options,"tab详情跳转后的options")
    this.getCategoryLists();
    this.classifyProducts();
    this.sortInterfaces()
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 100rpx;
  overflow-x: auto;
  display: flex;
  align-items: center;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.header p {
  width: auto;
  height: 100%;
  line-height: 100rpx;
  flex-shrink: 0;
  font-size: 32rpx;
  padding: 0 20rpx;
}
.top {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.top dl {
  width: 25%;
  height: 204rpx;
}
.top dl dt {
  width: 100rpx;
  height: 100rpx;
  margin: 20rpx auto;
}
.img {
  width: 100%;
  height: 100%;
}
.top dl dd {
  width: 100%;
  text-align: center;
  font-size: 24rpx;
}
.actives {
  color: #56d2bf;
  border-bottom: 3px solid #56d2bf;
}
.particulars {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #ccc;
  .particularsTop {
    width: 100%;
    height: 490rpx;
    background: #fff;
  }
}
.particularsBottom {
  width: 100%;
  height: auto;
  background: #fff;
  margin-top: 20rpx;
  .particulTop {
    height: 80rpx;
    left: 80rpx;
    line-height: 80rpx;
    text-align: center;
    ul {
      display: flex;
      text-align: center;
      li {
        flex: 3;
        :nth-child(2){
          margin-left: 10rpx;
          em{
          width:50rpx;
          height:50rpx;
          display:inline-block;
          margin-top:-10rpx;
          span{
            height:20rpx;
            display: block;
            width:20rpx;
          }
        }
        }
        
        }
        
      }
    }
  }
  .particulBottom {
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 10rpx;
  }
.selected {
  color: blue;
}
.nr {
  width: 362rpx;
  height: 512rpx;
  background: #fff;
  float: left;
  margin-left: 10rpx;
  margin-top: 10rpx;
  .nrTop {
    height: 310rpx;
    .particulars_img {
      width: 180rpx;
      height: 260rpx;
      margin-left: 25%;
      margin-top: 38rpx;
    }
  }
  .nrBottom {
    line-height: 40rpx;
    strong {
      color: red;
      border: 2rpx solid red;
      display: inline-block;
      font-size: 25rpx;
    }
    b {
      color: red;
      font-size: 35rpx;
      margin-top: 10rpx;
    }
    i {
      margin-top: 10rpx;
      em {
        background: pink;
        color: rgb(194, 39, 65);
        display: inline-block;
        margin-left: 10rpx;
      }
    }
  }
}
// .particulars_img
</style>
