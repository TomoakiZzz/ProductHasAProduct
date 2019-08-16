<template>
  <form @submit="submit" class="receiverAddress" report-submit>
    <ul class="list">
      <li>
        <input type="text" placeholder="收货人" placeholder-style="color:#666;" />
        <span>></span>
      </li>
      <li>
        <input type="number" placeholder="手机号码" placeholder-style="color:#666;" />
        <span>
          <span class="add">+</span><span class="eight">86</span>>
        </span>
      </li>
      <li>
        <input type="text" placeholder="所在地区" placeholder-style="color:#666;" />
        <span>></span>
      </li>
      <textarea
        cols="30"
        rows="10"
        placeholder="详细信息：如道路、门牌号、小区楼栋号、单元室等"
        placeholder-style="color:#666;"
      ></textarea>
    </ul>
    <div class="label">
      <div class="labelTop">
        <span>标签</span>
        <ol class="address">
          <span>家</span>
          <span>公司</span>
          <span>学校</span>
          <span>其它</span>
        </ol>
      </div>
      <div class="delAddress">
        <span>设置默认地址</span>
        <view class="body-view">
          <switch checked bindchange="switch1Change" color="cyan" />
          <!-- <switch bindchange="switch2Change" /> -->
        </view>
      </div>
    </div>
    <button form-type="submit">保存</button>
  </form>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    switch1Change: function(e) {
      console.log("switch1 发生 change 事件，携带值为", e.detail.value);
    }
    // switch2Change: function (e){
    //     console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    // }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.receiverAddress {
  width: 100%;
  height: 100%;
  background: #ccc;
  .list {
    width: 100%;
    padding: 0 20rpx;
    background: #fff;
    margin-bottom: 20rpx;
    li {
      display: flex;
      height: 100rpx;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1rpx solid #eee;
      input {
        font-size: 30rpx;
      }
      span {
        font-family: "楷体";
        font-weight: 600;
        color: #ccc;
        .add{
             margin-right: 10rpx;
              font-size: 34rpx;
        }
        .eight {
          margin-right: 20rpx;
          font-size: 34rpx;
        }
      }
    }
    textarea {
      font-size: 30rpx;
      height: 200rpx;
      margin-top: 20rpx;
    }
  }
  .label {
    width: 100%;
    height: 277rpx;
    padding: 0 20rpx;
    background: #fff;
    .labelTop {
      span {
        //   margin-left:20rpx;
        font-size: 30rpx;
      }
      .address {
        width: 100%;
        font-size: 34rpx;
        margin-top: 10rpx;
        // margin-bottom:
        padding-bottom: 70rpx;
        span {
          width: 20%;
          display: inline-block;
          padding: 10rpx 0;
          text-align: center;
          border: 2rpx solid #ccc;
          border-radius: 30rpx;
          margin: 0 10rpx;
        }
      }
    }
    .delAddress {
      width: 100%;
      height: 90rpx;
      //   background: pink;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1rpx solid #ccc;
      span {
        font-size: 34rpx;
      }
    }
  }
  button {
    width: 92%;
    margin-top: 100rpx;
    background: cyan;
    height: 100rpx;
    color:#fff;
    font-size: 36rpx;
  }
}
</style>