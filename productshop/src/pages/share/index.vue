<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:15:23
 * @LastEditTime: 2019-08-15 18:35:23
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="share_wrap">
    <div class="share_content">
        <canvas style="width: 100%;height: 100%;" canvas-id="shareFrends"></canvas>
    </div>
    <div class="share_btn">
        <div class="share_btn_item">
            <img src="../../../static/images/复制文案.svg" alt="">
            <span>复制文案</span>
        </div>
        <div class="share_btn_item">
            <img src="../../../static/images/分享微信.svg" alt="">
            <span>微信好友</span>
        </div>
        <div class="share_btn_item">
            <img src="../../../static/images/朋友圈 copy 2.svg" alt="">
            <span>朋友圈</span>
        </div>
        <div class="share_btn_item">
            <img src="../../../static/images/保存图片 copy 2.svg" alt="">
            <span>保存到相册</span>
        </div>
    </div>
    <!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo" v-if="userInfoFlag" class="userBtn">获取用户信息</button> -->
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex"

export default {
  props: {},
  components: {},
  data() {
    return {
      savedImgUrl: "",
      userInfoFlag: false , //用来控制获取用户信息按钮
      userInfo: {
        avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4001431513,4128677135&fm=26&gp=0.jpg',
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4001431513,4128677135&fm=26&gp=0.jpg',
        nickName: 'lingfang',
        user: 'lingfang',
        title: '雅诗兰黛口红'
      }
    };
  },
  onLoad(options){
     this.getDataFn({pid:Number(options.id)})   //获取详情
  },
  computed: {
    ...mapState({
      goodsItem: state => state.goods.goodsItem,  //产品详情
      userInfo: state => state.goods.userInfo //用户信息
    })
  },
  methods: {
    ...mapActions({
      getDataFn:'goods/getDataFn'
    }),
    ...mapMutations({
      saveUserInfo: 'user/saveUserInfo'
    }),
    // //获取用户信息
    // getUserInfo(e){
    //   let that = this;
    //   console.log('info...e...',e);
    //   if(e.target.errMsg != "getUserInfo:fail auth deny"){
    //     this.saveUserInfo(JSON.parse(e.mp.detail.rawData))
    //     that.userInfoFlag = false;
    //      wx.showToast({
    //       title: '获取信息成功', 
    //       success(){
            
    //       }
    //     });
    //   }else{
    //     wx.showModal({
    //       title: '亲爱的用户', //提示的标题,
    //       content: '同意我们的授权，让我们为您提供更加优质的服务', //提示的内容,
    //       showCancel: false, //是否显示取消按钮,
    //       confirmText: '去设置', 
    //       confirmColor: '#3CC51F',   //确定按钮的文字颜色
    //       success: res => {
    //         wx.openSetting({
    //           success: () => {
    //             that.getSetting();
    //           }
    //         });            
    //       }
    //     })
    //   }
    // },
    // //获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
    // //判断是否有用户信息 userLocation
    // getSetting(){
    //   let that = this;
    //   wx.getSetting({
    //     success: res => {
    //       if (res.authSetting['scope.userInfo']) {
    //         that.userInfoFlag = false;
    //       } else {
    //         that.userInfoFlag = true;
    //       }
    //     },  
    //   })
    // },
    //折行
   ctb (ctx,text,x,y,w,fontStyle) {
        ctx.save();
        ctx.font = fontStyle.font;
        ctx.fillStyle = fontStyle.fillStyle;
        ctx.textAlign = fontStyle.textAlign;
        ctx.textBaseline = fontStyle.textBaseline;
        const chr = text.split('');
        const row = [];
        let temp = '';
        /*
        判断如果末尾是，！。》 就不要换行
        判断如果末尾是《 就要换行
        */
        for (let a = 0; a < chr.length; a++) {
          if (ctx.measureText(temp).width < w) { } else {
            if (/[，。！》]/im.test(chr[a])) {
              // console.log(`我是${chr[a]},我在末尾,我不换行`);
              temp += ` ${chr[a]}`;
              // 跳过这个字符
              a++;
            }
            if (/[《]/im.test(chr[a - 1])) {
              // console.log(`我是${chr[a-1]},我在末尾,我要换行`);
              // 删除这个字符
              temp = temp.substr(0, temp.length - 1);
              a--;
            }
            row.push(temp);
            temp = '';
          }
          temp += chr[a] ? chr[a] : '';
        }
        row.push(temp);
        for (let b = 0; b < row.length; b++) {
          ctx.fillText(row[b], x, y + b * fontStyle.lineHeight);
        }
        ctx.draw();
    }
      
  },
  created() {
    // this.getSetting()
  },
  mounted() {
    let that=this;
    let ctx = wx.createCanvasContext('shareFrends'); 
      //绘图上下文
        //绘制用户名
        ctx.drawImage(this.userInfo.avatar,0, 0, 500, 500, 5, 39, 40, 40);
        ctx.save()
        ctx.setFontSize(14)
        ctx.fillText(`${this.userInfo.nickName}分享给你一个商品`, 67, 40)
        ctx.restore();
        ctx.fillText('邀请码：2wedfgt', 67, 60)
        ctx.save();
        wx.getImageInfo({
          src: this.userInfo.img,
          complete (res) {
            let rx,ry,rw,rh;
            ctx.drawImage(that.userInfo.img,0, 0, res.width, res.height, 0, 70, 300, 300);
            ctx.draw(true,()=>{
              wx.canvasToTempFilePath({
                quality: 1,
                fileType: 'jpg',
                canvasId: 'shareFrends',
                success(res) {
                  // wx.previewImage({
                  //   urls: [res.tempFilePath] //需要预览的图片链接列表,
                  // });
                }
              })

            })
          }
        })
        ctx.save();
        ctx.setFontSize(18)
        ctx.fillText("分享给你一个商品", 15, 460)
        ctx.save();

         // 绘制商品价格
        ctx.save();
        ctx.setFontSize(18);
        ctx.setFillStyle('#ff0000');
        ctx.fillText('￥168', 15, 500);
        // 长按识别二维码
        ctx.save();
        ctx.setFontSize(16);
        ctx.setFillStyle('#ddd');
        ctx.fillText('长按识别二维码访问', 15, 530);

        ctx.drawImage(this.userInfo.avatar,0, 0, 500, 500, 277, 450, 80, 80);


        ctx.draw();
  }
};
</script>
<style scoped lang="scss">
.share_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20rpx;
}
.share_content {
  width: 100%;
  flex: 1;
}
.share_btn {
  width: 100%;
  height: 120rpx;
  display: flex;
}
.share_btn_item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100rpx;
    height: 100rpx;
    margin-bottom: 10rpx;
  }
}
.userBtn{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: 999;
  opacity: 0;
}
</style>