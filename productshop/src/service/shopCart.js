/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 21:35:42
 * @LastEditTime: 2019-08-15 18:59:11
 * @LastEditors: Please set LastEditors
 */
import fly from '../utils/request';

//加入购物车
export let addCart = params=>{
    return fly.post('https://upapi.jinaup.com/api/open/order/prepare/1.0.0', params);
}