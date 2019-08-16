<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:15:23
 * @LastEditTime: 2019-08-16 07:54:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="share_wrap">
    <div class="share_content">
      <canvas style="width: 100%;height: 100%;" canvas-id="shareFrends"></canvas>
    </div>
    <div class="share_btn">
      <div class="share_btn_item">
        <img src="../../../static/images/复制文案.svg" alt>
        <span>复制文案</span>
      </div>
      <div class="share_btn_item">
        <img src="../../../static/images/分享微信.svg" alt>
        <span>微信好友</span>
      </div>
      <div class="share_btn_item">
        <img src="../../../static/images/朋友圈 copy 2.svg" alt>
        <span>朋友圈</span>
      </div>
      <div class="share_btn_item" @click="saveImg">
        <img src="../../../static/images/保存图片 copy 2.svg" alt>
        <span>保存到相册</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {
      userInfo: {},
      shareImg: "",
      flag: ""
    };
  },
  onLoad(options) {
    let that = this;
    this.getDataFn({ pid: Number(options.id) }); //获取详情
    wx.getStorage({
      key: "user",
      success(res) {
        that.userInfo = res.data;
      }
    });
  },
  computed: {
    ...mapState({
      goodsItem: state => state.goods.goodsItem //产品详情
    })
  },
  methods: {
    ...mapActions({
      getDataFn: "goods/getDataFn"
    }),
    saveImg() {
      let that = this;
      // 获取用户是否开启用户授权相册
      wx.getSetting({
        success(res) {
          // 如果没有则获取授权
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success() {
                wx.saveImageToPhotosAlbum({
                  filePath: that.shareImg,
                  success() {
                    wx.showToast({
                      title: "保存成功"
                    });
                  },
                  fail() {
                    wx.showToast({
                      title: "保存失败",
                      icon: "none"
                    });
                  }
                });
              },
              fail() {
                // 如果用户拒绝过或没有授权，则再次打开授权窗口
                //（ps：微信api又改了现在只能通过button才能打开授权设置，以前通过openSet就可打开，下面有打开授权的button弹窗代码）
              }
            });
          } else {
            // 有则直接保存
            wx.saveImageToPhotosAlbum({
              filePath: that.shareImg,
              success() {
                wx.showToast({
                  title: "保存成功"
                });
              },
              fail() {
                wx.showToast({
                  title: "保存失败",
                  icon: "none"
                });
              }
            });
          }
        }
      });
    }
  },
  mounted() {
    let that = this;
    //绘图上下文
    let ctx = wx.createCanvasContext("shareFrends");
    console.log(this.userInfo);
    //绘制头像
    // 绘制用户名和头像
    ctx.save();
    // ctx.arc(34, 47, 20, 0, 2 * Math.PI);
    // ctx.fillStyle = "#fff";
    // ctx.clip();
    // ctx.fill();
    ctx.drawImage(this.userInfo.avatarUrl, 0, 0, 120, 120, 15, 30, 40, 40);
    ctx.save();
    ctx.setFontSize(12);
    ctx.fillText(`${this.userInfo.nickName}分享给你一个商品`, 67, 40);
    ctx.fillText(`邀请码: dasbdabdbaj`, 67, 60);
    ctx.restore();
    // 绘制商品大图和标题
    ctx.save();
    ctx.setFontSize(12);
    let row = 0,
      pos = 0;
    for (let i = 0; i < this.goodsItem.title.length; i++) {
      let str = this.goodsItem.title.slice(pos, i);
      if (
        ctx.measureText(str).width > 266 &&
        ctx.measureText(str).width < 280
      ) {
        ctx.fillText(this.goodsItem.title.slice(pos, i), 20, 360 + 15 * row);
        row++;
        pos = i;
      }
    }
    if (pos < this.goodsItem.title.length) {
      ctx.fillText(
        this.goodsItem.title.slice(pos, this.goodsItem.title.length),
        20,
        360 + 15 * row
      );
    }
    wx.getImageInfo({
      src: this.goodsItem.mainImgUrl, //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
      complete: res => {
        console.log("res...", res);
        let rx, ry, rw, rh;
        if (res.width / res.height > 220 / 260) {
          ry = 0;
          rh = res.height;
          rw = res.height / 260 * 220;
          rx = (res.width - rw) / 2;
        } else {
          rx = 0;
          rw = res.width;
          rh = res.height / 220 * 260;
          ry = (res.height - rh) / 2;
        }
        ctx.drawImage(
          this.goodsItem.mainImgUrl,
          0,
          0,
          res.width,
          res.height,
          50,
          80,
          220,
          260
        );
        ctx.draw(true, () => {
          // 生成图片
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,

            canvasId: "shareFrends",
            quality: 1,
            fileType: "jpg",
            complete: res => {
              console.log("tmpFile...", res);
              this.shareImg = res.tempFilePath;
              // 预览一下
              // wx.previewImage({
              //   urls: [res.tempFilePath] //需要预览的图片链接列表,
              // });
              // 保存到本地
            }
          });
        });
      }
    });
    // 计算多行文本，自动换行

    // 绘制二维码
    ctx.save();
    ctx.setFontSize(15);
    ctx.fillText("长按识别二维码访问", 20, 480);
    ctx.restore();
    ctx.drawImage(
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565922951830&di=1c2dbe3068da2172cc58b2fa4c71d504&imgtype=0&src=http%3A%2F%2Fthumb12.jfcdns.com%2F2018-06%2Fbce5b34974538f2e.jpeg",
      0,
      0,
      2160,
      2160,
      240,
      420,
      80,
      80
    );
    // 绘制商品价格
    // ctx.save();
    ctx.setFontSize(10);
    ctx.setFillStyle("#ff0000");
    ctx.fillText("￥", 20, 450);
    ctx.setFontSize(18);
    ctx.fillText(this.goodsItem.salesPrice, 30, 450);
    ctx.setFontSize(10);
    ctx.setFillStyle("#999");
    // info.result.marketPrice = '88888.888888';
    ctx.fillText(
      `￥${this.goodsItem.marketPrice}`,
      155 - ctx.measureText(`￥${this.goodsItem.marketPrice}`).width,
      450
    );
    ctx.restore();
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
.userBtn {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 0;
}
</style>