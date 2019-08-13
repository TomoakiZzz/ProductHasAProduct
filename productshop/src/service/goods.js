/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 09:17:35
 * @LastEditTime: 2019-08-13 19:35:51
 * @LastEditors: Please set LastEditors
 */
import fly from '../utils/request';

//产品信息
export let getGoodsData = params=>{
    return fly.post('/api/open/product/info/1.0.0', params);
}
//详情图片
export let detailPicture= params=>{
    return fly.post('/api/open/product/detailPicture/1.0.0', params);
}
//快递提示
export let hint= params=>{
    return fly.post('/api/open/shipping/templates/info/1.0.0', params);
}
//选择规格
export let standard= params=>{
    return fly.post('/api/open/product/sku/attrs/1.0.0', params);
}
//获取相关产品
export let related= params=>{
    return fly.post('/api/open/product/coupon/productCouponList/1.0.0', params);
}




