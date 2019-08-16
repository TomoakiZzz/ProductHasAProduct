<template>
  <div class="certification">
    <ul class="ipt">
      <li>
        <label for>真实姓名</label>
        <input type="text" placeholder="请输入姓名" />
      </li>
      <li>
        <label for>身份证号</label>
        <input type="text" placeholder="请输入姓名" />
      </li>
    </ul>
    <div class="uploadPhoto">
      <div class="top">
        上传身份证照片
        <span>(图片png、jpg格式，大小不超过5M)</span>
      </div>
      <div class="picture">
        <div>
          <img src="/static/images/pic.png" alt />
          <p>正面照片</p>
        </div>
        <div>
          <img src="/static/images/pic.png" alt />
          <p>背面照片</p>
        </div>
      </div>
      <div class="bottom">
        <h3>为什么需要实名认证?</h3>
        <p>
          发你功能那诶防护二区入户南京鞥你就饿呢尽可能的房价款那款
          发你功能那诶防护二区入户南京鞥你就饿呢尽可能的房价款那款
          发你功能那诶防护二区入户南京鞥你就饿呢尽可能的房价款那款
          发你功能那诶防护二区入户南京鞥你就饿呢尽可能的房价款那款
          发你功能那诶防护二区入户南京鞥你就饿呢尽可能的房价款那款
        </p>
        <button>保存</button>
      </div>
    </div>

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
.certification {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
  .ipt {
    width: 100%;
    background: #fff;
    padding: 0 10rpx;
    font-size: 32rpx;
    margin-bottom: 20rpx;
    li {
      display: flex;
      height: 100rpx;
      align-items: center;
      border-bottom: 1rpx solid #ccc;
      label {
        color: #000;
      }
      input {
        color: #ccc;
        padding-left: 40rpx;
      }
    }
  }
  .uploadPhoto {
    width: 100%;
    height: 330rpx;
    background: #fff;
    padding:3rpx 10rpx;
    margin:10rpx 0;
    .top {
      font-size: 30rpx;
    }
    .picture {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin:30rpx 0;
      div {
        width:48%;
        height: 230rpx;
        // line-height: 200rpx;
        border:2rpx dashed #85e7dd;
        text-align: center;
        // background: pink;
        // margin-top:10rpx;
        font-size: 30rpx;
        border-radius:10rpx;
        img {
          width: 100rpx;
          height: 100rpx;
          margin-top:20rpx;
        }
      }
    }
    .bottom{
      width: 100%;
      height: 800rpx;
      background: #f3f7f7;
      padding:0 10rpx;
      margin: 20rpx 0;
      h3{
        text-align: center;
        line-height: 100rpx;
      }
      p{
        //  font-size: 30rpx;
      }
      button{
        width: 100%;
        background: #93e6de;
        color:#fff;
        margin: 10rpx 0;
      }
    }
  }
}

// 
</style>
