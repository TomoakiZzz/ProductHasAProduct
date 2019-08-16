<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 19:57:53
 * @LastEditTime: 2019-08-15 21:13:36
 * @LastEditors: Please set LastEditors
 -->
<script>
import {Login} from "./service"

export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
     wx.login({
      success: async (res)=>{
        if (res.code) {
          //发起网络请求
           wx.getSystemInfo({
            success:(phone)=>{
              console.log(phone) 
            }
          })
          // console.log(2222)
          //  let data = await Login({code: res.code, platform: phone.model});
          // console.log(data)
        }
      }
    })

    
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>

html,body,page{
  width: 100%;
  height:100%;
  
}
div,p,ul,li,ol,p,span,b,i{
  box-sizing: border-box;
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}


</style>
