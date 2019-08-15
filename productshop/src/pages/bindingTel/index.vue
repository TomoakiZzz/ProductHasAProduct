<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 19:01:36
 * @LastEditTime: 2019-08-15 19:02:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="tel_wrap">
    <div class="tel_main">
      <!--手机号-->
      <div class="tel">
        <span>手机号</span>
        <input type="text" placeholder="请输入电话" />
      </div>
      <!--验证码-->
      <div class="code">
        <span>验证码</span>
        <input type="text" placeholder="请输入验证码" />
        <span class="btn">获取验证码</span>
      </div>
      <!--绑定-->
      <div class="checkBtn">
        <button>验证后绑定新手机</button>
      </div>
    </div>
    <p>若当前号码已经不用或者丢失，请联系专属客服</p>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.tel_wrap {
    width:100%;
    height:100%;
    overflow: hidden;
    display:flex;
    flex-direction: column;
    background: #f3f7f7;
}
.tel_main{
    flex:1;
    .code,.tel{
        width:100%;
        height: 90rpx;
        background: #fff;
        padding:0 20rpx;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        span{
            padding:0 20rpx;
        }
        input{
            flex:1;
        }
        .btn{
            padding: 10rpx 20rpx;
            border: 1px solid #fc5d7b;
            color: #fc5d7b;
            border-radius: 30rpx;
        }
    }
}
.checkBtn{
    padding: 0 20rpx;
    button{
        width: 100%;
        height: 90rpx;
        background: #93e6de;
        color: #fff;
        margin-top: 100rpx;
        box-sizing: border-box;
    }
}
p{
    color:#c5c9cc;
    height: 90rpx;
    line-height: 90rpx;
    text-align: center;
    width: 100%;
}

</style>