import request from "../utils/request.js"
export function getHomeData() {
    return request.post("/api/open/page/home/list/1.0.0")
}
export function getCategoryList(params) {
    console.log(params)
    return request.post("/api/open/product/category/sub/1", { parentId: 0 })
}

//  获取专题数据
export function getSpecialData(params) {
    console.log('1234567890',params);// /api/open/search/init/  { siid: 2 }
    // https://upapi.jinaup.com/api/open/sepcial/query/1.0.0  siid: 223
    return request.post('/api/open/sepcial/query/1.0.0',params)
}