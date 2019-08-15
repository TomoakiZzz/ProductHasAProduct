<template>
  <div class="particulars">
    <div class="particularsTop">
      <!-- tab -->
      <div class="header">
        <p>今日推荐</p>
        <p
          v-for="(item,index) in sortInterfaceData"
          :key="index"
          :class="[index===ind?'actives':'null']"
          @click="handTopTab(index)"
        >{{item.cname}}</p>
      </div>

      <div class="top">
        <dl v-for="(item,index) in sortInterfaceData[ind].childs" :key="index">
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
        <ul class="priceList">
          <li
            v-for="(item,index) in list"
            :key="index"
            :class="[index===BotIndex?'active':'null']"
            @click="changTab(index)"
          >{{item}}</li>
          <div class="price">
            <span v-if="flag">
              <img src="../../../static/images/priceSortUp.png" alt />
            </span>
            <span v-else>
              <img src="../../../static/images/priceSortDown.png" alt />
            </span>
          </div>
        </ul>
      </div>
      <div class="particulBottom">
        <div class="bottomNr">
          <div class="nr" v-for="(ite,index) in classifyProductData" :key="index">
            <p class="nrTop">
              <img :src="ite.mainImgUrl" alt class="particulars_img" />
            </p>
            <span class="nrBottom">
              <p>[保税包邮]DutchCow....</p>
              <strong>保税</strong>
              <b>￥{{ite.salesPrice}}</b>
              <i>
                ￥{{ite.vipPrice}}
                <em>赚￥{{ite.earnMoney}}</em>
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import TapBar from "../../components/tapBar";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      tab: 1,
      flag: true,
      BotIndex: 0,
      list: ["综合", "最新", "价格"],
      flagNum: 0
    };
  },
  components: {
    TapBar
  },
  computed: {
    ...mapState({
      CategoryListData: state => state.page.CategoryListData,
      classifyProductData: state => state.page.classifyProductData,
      sortInterfaceData: state => state.page.sortInterfaceData,
      ind: state => state.page.ind
    })
  },
  methods: {
    ...mapActions({
      getCategoryLists: "page/getCategoryLists",
      classifyProducts: "page/classifyProducts",
      sortInterfaces: "page/sortInterfaces"
    }),
    ...mapMutations({
      updateInd: "page/updateInd"
    }),
    handTopTab(index) {
      this.updateInd(index);
      this.classifyProducts({
        pageIndex: 1,
        cid: this.sortInterfaceData[index].cid,
        sortType: 1
      });
    },
    changTab(index) {
      this.classifyProducts({
        pageIndex: 1,
        cid: this.sortInterfaceData[this.ind].cid,
        sortType: this.sortInterfaceData[index].sortId
      });
      if (index === 2 && this.flagNum === 0) {
        this.flag = this.flag;
        this.flagNum = 1;
      } else if (index === 2 && this.flagNum === 1) {
        this.flag = !this.flag;
        if (this.flag === true) {
          this.classifyProducts({
            pageIndex: 1,
            cid: this.sortInterfaceData[this.ind].cid,
            sortType: 3
          });
        } else {
          this.classifyProducts({
            pageIndex: 1,
            cid: this.sortInterfaceData[this.ind].cid,
            sortType: 4
          });
        }
      } else if (index != 2) {
        this.flagNum = 0;
      }

      this.BotIndex = index;

      // this.classifyProducts({
      //   pageIndex: 1,
      //   cid: this.sortInterfaceData[this.ind].cid,
      //   sortType: this.sortInterfaceData[index].sortId
      // });
      // console.log(this.classifyProducts(this.flagNum), ".................");
    }
  },
  onLoad(options) {
    // console.log(this, "tab详情跳转后的options");
    this.updateInd(options.index - 1);
    this.getCategoryLists();
    this.classifyProducts({ pageIndex: 1, cid: options.cid, sortType: 1 });
    this.sortInterfaces();
  }
};
</script>

<style lang="scss" scoped>
.priceList {
  position: relative;
}
.price {
  width: 50rpx;
  height: 100rpx;
  // background: red;
  position: absolute;
  z-index: 1000;
  top: 50%;
  right: 40rpx;
  transform: translateY(-50%);
  span {
    width: 100%;
    height: 100%;
    //  position: absolute;
    //  transform: translateY(50%);

    img {
      width: 100%;
      height: 100%;
      // margin-top: 20rpx;
      transform: scale(0.4);
    }
  }
}

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
.bottomNr {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
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
.active {
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
    height: auto;
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
