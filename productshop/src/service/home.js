import request from "../utils/request.js"

//首页数据
export function getHomeData(){
    return request.post("/api/open/page/home/list/1.0.0")
}
//首页tab
export function getCategoryList(params){
    // console.log(params)
    return request.post("/api/open/product/category/sub/1",params)
}
//上拉加载的数据
export function getBetterShopData(params){
    return request.post("/api/open/page/home/products/1.0.0",params)
}

//  获取专题数据
export function getSpecialData(params) {
    console.log('1234567890',params);// /api/open/search/init/  { siid: 2 }
    // https://upapi.jinaup.com/api/open/sepcial/query/1.0.0  siid: 223
    return request.post('/api/open/sepcial/query/1.0.0',params)
}

//  https://upapi.jinaup.com/api/open/micro/product/category/query/1.0.0  分类数据  parentId:0


// pid: 161  id: 11719  uid: 23  usiid: 
export function getDetail(params){
    return request.post('/api/open/product/coupon/productCouponList/1.0.0',params);
}
