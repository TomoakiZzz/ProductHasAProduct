/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 10:44:59
 * @LastEditTime: 2019-08-15 11:09:25
 * @LastEditors: Please set LastEditors
 */
import request from "../utils/request.js"

//用户授权登录
export function Login(params){
    console.log(params,'params')
    return request.post(`/api/open/user/info/oauth/1.0.0`,params)
}