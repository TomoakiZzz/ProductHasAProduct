<template>
  <div class="retrun-wrap">
      <div class="return-top">
        
      </div>
      <div class="returnCause">
        <h4>退款原因</h4>
        <p>请选择&nbsp;>&nbsp;&nbsp;</p>
      </div>
      <div class="returnPrice">
        <h4>退款金额<b>￥52.50</b></h4>
        <p>最多￥52.50&nbsp;&nbsp;含邮费:￥0</p>
      </div>
      <div class="returnExplain">
        <h4>退款说明</h4>
        <p><input type="text" placeholder="选填"></p>
      </div>
      <div class="retrunVoucher">
        <h4>退款说明<span>(最多选择3张)</span></h4>
        <div class="returnImg">
            <div @click="addImg">+</div>
        </div>
      </div>
      <button class="btntj">提交</button>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";

export default {
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    addImg(){
      wx.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFilePaths
  }
})
    }
  }
};
</script>

<style lang="scss" scoped>
.retrun-wrap{
  width:100%;
  height:100%;
  font-size: 37rpx;
  background: #ccc;
}
.return-top{
  width:100%;
  height:250rpx;
  background: #fff;
}
.returnCause{
  height: 91rpx;
  line-height: 91rpx;
  background: #fff;
  margin-top:21rpx;
  display: flex;
  h4{
    flex:8;
    margin-left: 20rpx;
  }
  p{
    flex:2;
    font-size: 32rpx;
    color:rgb(136, 134, 134);
  }
}
.returnPrice{
  height:183rpx;
  background: #fff;
  margin-top: 21rpx;
  h4{
    line-height: 130rpx;
    margin-left: 20rpx;
    b{
      display: inline-block;
      color:red;
    }
  }
  p{
    color:#ccc;
    font-size: 32rpx;
    margin-left: 20rpx;
  }
}

.returnExplain{
  height: 91rpx;
  line-height: 91rpx;
  background: #fff;
  margin-top:21rpx;
  display: flex;
  h4{
    flex:3;
    margin-left: 20rpx;
  }
  p{
    flex:7;
    input{
      width:80%;
      height:100%;
      // border:2rpx solid #ccc;
    }
  }
}
.retrunVoucher{
  height:auto;
  background: #fff;
  margin-top:21rpx;
  h4{
    height: 91rpx;
    line-height: 91prx;
    margin-left: 20rpx;
  }
  .returnImg{
    height: 200rpx;
    width:200rpx;
    line-height: 200rpx;
    text-align: center;
    font-size: 100rpx;
    border:2rpx solid #ccc;
    input{
      width:100%;
      height: 100%;
    }
  }
}
.btntj{
  width:100%;
  bottom:0;
  position: fixed;
}
</style>
