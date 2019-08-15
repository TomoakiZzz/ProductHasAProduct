<template>
  <div class="search-wrap">
    <div class="search">
      <div class="searchInp">
        <img src="../../../static/images/搜索(1).svg" alt>
        <input
          v-model="inpValue"
          type="text"
          placeholder="搜索"
          @confirm="searchShop"
          @input="valueLength"
        >
      </div>
      <div class="cancel" @tap="close">取消</div>
    </div>
    <div v-if="isShow" class="wrapContenter">
      <div class="history">
        <span>历史搜索</span>
        <span @tap="closeHistory">
          <img src="../../../static/images/删除.svg">
        </span>
      </div>
      <div class="historyList">
        <span v-for="item in searchList" :key="item" @tap="searchShoping(item)">{{item}}</span>
      </div>
    </div>
    <div v-if="!isShow" class="wrapContenter">
      <div class="shopSort">
        <span
          v-for="(item,index) in sortList"
          :key="item"
          :class="{'active':index===ind}"
          @tap="sortShopList(index)"
        >{{item}}</span>
        <span class="upOrDown">
          <img v-if="isUpOrDown" src="../../../static/images/sortShopUp.png" alt>
          <img v-else src="../../../static/images/sortShopDown.png">
        </span>
      </div>
      <div class="shopListCon">
        <div class="shopListItem" v-for="item in searchShopList" :key="item.pid">
          <div class="shopPic">
            <span>
              <img :src="item.mainImgUrl" alt>
            </span>
          </div>
          <div class="shopTitle">
            <p>{{item.title}}</p>
            <p>
              <span class="shopPrice">
                <b>￥</b>
                <b>{{item.salesPrice}}</b>
              </span>
              <span class="shopBeforPrice">￥{{item.vipPrice}}</span>
            </p>
            <span class="shopMsg">NEW</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      inpValue: "",
      isShow: true,
      searchList: [],
      sortList: ["综合", "最新", "价格"],
      ind: 0,
      isUpOrDown: true,
      isClickNum: 0,
      formData: {
        queryWord: "",
        queryType: 0,
        querySort: "asc",
        pageIndex: 1
      }
    };
  },
  computed: {
    ...mapState({
      searchShopList: state => state.search.searchShopList
    })
  },
  methods: {
    ...mapActions({
      searchShopData: "search/searchShopData"
    }),
    searchShop(e) {
      if (this.inpValue.trim()) {
        this.isShow = false;
        this.formData.queryWord = this.inpValue.trim();
        this.searchShopData(this.formData);
        console.log(
          this.searchList.findIndex(item => item == this.inpValue.trim())
        );
        if (
          this.searchList.findIndex(item => item == this.inpValue.trim()) === -1
        ) {
          this.searchList.push(this.inpValue.trim());
          wx.setStorage({
            key: "history",
            data: JSON.stringify(this.searchList)
          });
        }
      } else {
        this.isShow = true;
      }
      console.log(this.inpValue);
    },
    close() {
      // console.log(123)
      this.isShow = true;
      this.inpValue = "";
      this.formData = {
        queryWord: "",
        queryType: 0,
        querySort: "asc",
        pageIndex: 1
      };
    },
    closeHistory() {
      wx.clearStorage();
      this.searchList = [];
    },
    searchShoping(item) {
      this.isShow = false;
      this.inpValue = item;
      this.formData.queryWord = this.inpValue;
      this.searchShopData(this.formData);
    },
    sortShopList(index) {
      if (index === 2 && this.isClickNum === 0) {
        this.isUpOrDown = true;
        this.isClickNum = 1;
      } else if (index === 2 && this.isClickNum === 1) {
        this.isUpOrDown = !this.isUpOrDown;
      } else if (index !== 2) {
        this.isClickNum = 0;
      }
     
      this.formData.queryWord = this.inpValue;
       console.log(this.isClickNum,"isClickNum..........")
      switch (index) {
        case 0:
          this.formData.queryType = 0;
          break;
        case 1:
          this.formData.queryType = 1;
          break;
        case 2:
          if (this.isUpOrDown) {
            this.formData.queryType = 2;
            this.formData.querySort = "asc";
          } else {
            this.formData.queryType = 2;
            this.formData.querySort = "desc";
          }
          break;
        default:
          break;
      }
      this.searchShopData(this.formData);
      this.ind = index;
    },
    valueLength() {
      if (!this.inpValue) {
        this.isShow = true;
        this.formData = {
          queryWord: "",
          queryType: 0,
          querySort: "asc",
          pageIndex: 1
        };
      }
    }
  },
  onLoad() {
    wx.getStorage({
      key: "history",
      success: res => {
        // console.log(typeof res.data);
        this.searchList = JSON.parse(res.data) || [];
      }
    });
  },
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
      flex: 1;
      // cursor: auto;
      // display: block;
      // height: 1.4rem;
      text-overflow: clip;
      // overflow: hidden;
      white-space: nowrap;
      font-family: UICTFontTextStyleBody;
      // min-height: 1.4rem;
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
  padding-left: 40rpx;
  span {
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

.shopListCon {
  width: 100%;
  background: #f3f7f7;
  padding: 18rpx 10rpx 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .shopListItem {
    width: 363rpx;
    height: 536rpx;
    background: #fff;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    margin-top: 8rpx;
    position: relative;
    .shopPic {
      height: 400rpx;
      padding: 60rpx 46rpx 30rpx 28rpx;
      > span {
        display: block;
        width: 295rpx;
        height: 277rpx;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .shopTitle {
      width: 100%;
      flex: 1;
      > p:first-of-type {
        font-size: 24rpx;
        padding-left: 10rpx;
        color: #323a45;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > p:last-of-type {
        width: 100%;
        display: flex;
        align-items: flex-end;
        .shopPrice {
          display: flex;
          align-items: flex-end;
          padding-left: 6rpx;
          color: #fc5d7b;
          b:first-of-type {
            font-size: 28rpx;
            font-weight: 400;
          }
          b:last-of-type {
            font-size: 36rpx;
            font-weight: 400;
          }
        }
        .shopBeforPrice {
          font-size: 22rpx;
          color: #a87831;
        }
      }
      .shopMsg {
        display: block;
        width: 50rpx;
        height: 26rpx;
        border-radius: 4rpx;
        background: linear-gradient(270deg, #ffb848, #ff7737);
        position: absolute;
        top: 20rpx;
        right: 20rpx;
        color: #fff;
        font-size: 18rpx;
        text-align: center;
        line-height: 26rpx;
      }
    }
  }
}
.shopSort {
  width: 100%;
  height: 80rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 26rpx;
  position: relative;
  .active {
    color: red;
  }
  .upOrDown {
    position: absolute;
    top: 50%;
    right: 60rpx;
    transform: translateY(-50%);
    width: 20rpx;
    height: 40rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.wrapContenter {
  width: 100%;
}
</style>