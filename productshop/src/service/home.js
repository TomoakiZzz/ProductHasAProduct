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